ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Sort, ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    allowSorting: true
});

grid.appendTo('#Grid');

