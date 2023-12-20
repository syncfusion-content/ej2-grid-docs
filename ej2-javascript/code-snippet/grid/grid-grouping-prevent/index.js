ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Group);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID',allowGrouping: false, width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 267
});
grid.appendTo('#Grid');