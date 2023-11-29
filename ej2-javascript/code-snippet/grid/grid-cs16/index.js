var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new ej.data.ODataAdaptor(),
    offline: true
});
ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Sort, ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowPaging: true,
    pageSettings: { pageSize: 7 },
    allowSorting: true,
    allowGrouping: true
});

grid.appendTo('#Grid');

