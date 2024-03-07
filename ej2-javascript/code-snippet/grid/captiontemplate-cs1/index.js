ej.grids.Grid.Inject(ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { captionTemplate: '#captiontemplate', showDropArea: false, columns: ['CustomerID', 'ShipCity'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID',textAlign: 'Right',width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID',width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 315
});
grid.appendTo('#Grid');