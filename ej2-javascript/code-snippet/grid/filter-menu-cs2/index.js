ej.grids.Grid.Inject(ej.grids.Filter);

var filterParams = { params: { showSpinButton: false } };
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', filter: filterParams, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Name' },
        { field: 'ShipName', headerText: 'Ship Name' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2' }
    ],
});     
grid.appendTo('#Grid');