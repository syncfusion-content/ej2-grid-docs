ej.grids.Grid.Inject(ej.grids.Reorder);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

var reorderSingleColumnUsingFieldName = new ej.buttons.Button(
  { cssClass: 'e-info' },
  '#reordersingle'
);
var reorderMultipleColumnsUsingFieldName = new ej.buttons.Button(
  { cssClass: 'e-info' },
  '#reordermultiple'
);
document.getElementById('reordersingle').onclick = function () {
  grid.reorderColumns('ShipCity', 'OrderID');
};
document.getElementById('reordermultiple').onclick = function () {
  grid.reorderColumns(['ShipCity', 'ShipRegion', 'ShipName'], 'OrderID');
};