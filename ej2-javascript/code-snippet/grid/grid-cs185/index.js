var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: { type: 'Multiple' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 }
  ],
  height: 315,
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
  change: toggleRowSelection,
  checked: false,
});
toggle.appendTo('#switch');

function toggleRowSelection() {
  grid.selectionSettings.enableSimpleMultiRowSelection = toggle.checked;
}