ej.grids.Grid.Inject(ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    searchSettings: { fields: ['CustomerID', 'ShipCity', 'ShipName']},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Center',format:'C2', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 }
    ],
    toolbar: ['Search'],
    height: 260
});
grid.appendTo('#Grid');


