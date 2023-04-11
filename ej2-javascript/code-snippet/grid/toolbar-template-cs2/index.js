var clickHandler = function(args){
    var target = (args.originalEvent.target).closest('.e-toolbar-item');
    if (target.id === 'collapse') {
        grid.groupModule.collapseAll();
    }
};
ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Group, ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbarTemplate: '#toolbar-template',
    toolbarClick: clickHandler,
    allowGrouping: true,
    groupSettings: { columns: ['CustomerID'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 200
});
grid.appendTo('#Grid');

