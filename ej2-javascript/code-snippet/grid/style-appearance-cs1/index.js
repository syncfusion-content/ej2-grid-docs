ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Selection);
var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple' },
    allowPaging: true,
    pageSettings: { pageSize: 8 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', type: 'number', textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 120 },
        { field: 'Freight', headerText: 'Freight', type: 'number', format: 'C2', textAlign: 'Right', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', type: 'string', width: 180 },
    ],
    height: 273
});
grid.appendTo('#Grid');


