ej.grids.Grid.Inject(ej.grids.Resize);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowResizing: true,
    autoFit: true,
    height: 400,
    width: 850,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', minWidth:100, width: 150, maxWidth: 200, textAlign:'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', minWidth:8, width: 120, format:'C2', textAlign:'Right' },
        { field: 'ShipCity', headerText: 'Ship City', allowResizing:false, width: 150, textAlign:'Right' },
        { field: 'ShipCountry', headerText: 'ShipCountry', minWidth:8, width: 120 },
    ],
});
grid.appendTo('#Grid');
