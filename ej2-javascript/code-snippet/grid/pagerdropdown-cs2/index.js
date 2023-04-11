ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings:{pageSizes: ['5', '10','All']},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City',  width: 100 },
        { field: 'ShipName', headerText: 'Ship Name',  width: 100 }
    ],
    height: 220
});
grid.appendTo('#Grid');

