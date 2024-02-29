ej.grids.Grid.Inject(ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { captionTemplate: '#captiontemplate'},
    columns: [
        { field: 'OrderID', headerText: 'ID',textAlign: 'Right',width: 90 },
        { field: 'CustomerID', headerText: 'Name',width: 100 },
        { field: 'ShipCity', headerText: 'City', width: 100 },
        { field: 'Freight', headerText: 'Value', width: 80 }
    ],
    height: 315
});
grid.appendTo('#Grid');