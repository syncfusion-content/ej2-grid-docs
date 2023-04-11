ej.grids.Grid.Inject(ej.grids.RowDD);
var grid = new ej.grids.Grid({
    dataSource: data.slice(0, 10),
    allowRowDragAndDrop: true,    
    selectionSettings: { type: 'Multiple'},
    columns: [
        { field: 'OrderID', headerText: 'Order ID',isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid'); 

