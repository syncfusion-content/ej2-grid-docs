ej.grids.Grid.Inject(ej.grids.RowDD);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowRowDragAndDrop: true,    
    selectionSettings: { type: 'Multiple'},
    height: 400,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format:'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format:'C2', textAlign: 'Right' },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 }
    ]
});
grid.appendTo('#Grid'); 