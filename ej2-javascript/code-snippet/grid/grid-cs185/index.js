ej.grids.Grid.Inject(ej.grids.Page);

var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: { type: 'Multiple' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150, textAlign: 'Right' },
    { field: 'ShipCity', headerText: 'Ship City', width: 150, textAlign: 'Right' },
    { field: 'ShipName', headerText: 'Ship Name', width: 150, textAlign: 'Right' }
  ],
  height: 315,
});
grid.appendTo('#Grid');

var enableSelection = false;

var toggle = new ej.buttons.Switch({
  change: toggleRowSelection,
  checked: enableSelection,
});
toggle.appendTo('#switch');

function toggleRowSelection() {
  grid.selectionSettings.enableSimpleMultiRowSelection = toggle.checked;
}