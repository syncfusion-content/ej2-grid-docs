ej.grids.Grid.Inject(ej.grids.RowDD, ej.grids.Sort, ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data.slice(0, 10),
    allowRowDragAndDrop: true,   
    allowFiltering:true,
    allowSorting:true, 
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID',isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid'); 

