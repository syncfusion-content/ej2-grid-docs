ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Group, ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Expand', 'Collapse'],
    allowGrouping: true,
    groupSettings: { columns: ['CustomerID'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 220,
    toolbarClick: clickHandler
});
grid.appendTo('#Grid');

var enable = new ej.buttons.Button({}, '#enable');
var disable = new ej.buttons.Button({}, '#disable');

enable.element.onclick = function(){
    grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true);// enable toolbar items.
};

disable.element.onclick = function(){
    grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false);// disable toolbar items.
};

function clickHandler(args) {
    if (args.item.id === 'Grid_Collapse') { // grid_Collapse is component id + '_' + toolbar item name.
        grid.groupModule.collapseAll();
    }
    if (args.item.id === 'Grid_Expand') {
        grid.groupModule.expandAll();
    }
}

