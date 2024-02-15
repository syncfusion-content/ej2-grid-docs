var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  selectionSettings: { mode: 'Cell', type: 'Multiple' },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 },
  ],
  height: 315
});
grid.appendTo('#Grid');

var dropdownData = [
  { text: 'Flow', value: 'Flow' },
  { text: 'Box', value: 'Box' },
  { text: 'BoxWithBorder', value: 'BoxWithBorder' },
];

var dropdown = new ej.dropdowns.DropDownList({
  value: grid.selectionSettings.cellSelectionMode,
  popupHeight: '240px',
  width: 150,
  dataSource: dropdownData,
  change: valueChange,
});
dropdown.appendTo('#dropdown');

function valueChange(args) {
  grid.selectionSettings.cellSelectionMode = args.value;
}