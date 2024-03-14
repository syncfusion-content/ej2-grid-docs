ej.grids.Grid.Inject(ej.grids.Filter);

var filterParams = { params: { autofill: false } };
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Name', filter: filterParams },
        { field: 'ShipName', headerText: 'Ship Name' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2' }
    ],
});     
grid.appendTo('#Grid');