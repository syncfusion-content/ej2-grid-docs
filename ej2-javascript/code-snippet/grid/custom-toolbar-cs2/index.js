var clickHandler = function(args){
    if (args.item.id === 'expandall') {
        grid.groupModule.expandAll();
    }
    if (args.item.id === "collapseall") {
        grid.groupModule.collapseAll();
    }
};
ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['CustomerID'] },
    toolbar: [{ text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
    { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse-2', id: 'collapseall', align: 'Right' }],
    toolbarClick: clickHandler,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 200,
});
grid.appendTo('#Grid');