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

var reorderSingleColumnByTargetIndex = new ej.buttons.Button({ cssClass: 'e-info' },'#reordersingle');
var reorderMultipleColumnByTargetIndex = new ej.buttons.Button({ cssClass: 'e-info' },'#reordermultiple');
document.getElementById('reordersingle').onclick = function () {
  grid.reorderColumnByTargetIndex('OrderID', 3); // move column with field name "OrderID" to index 3
};
document.getElementById('reordermultiple').onclick = function () {
  grid.reorderColumnByTargetIndex(['OrderID', 'CustomerID'], 3); // move columns with field name "OrderID" and "CustomerID" to index 3
};

