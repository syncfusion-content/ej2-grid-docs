var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: { type: 'Multiple' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120},
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
  ],
  height: 315,
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
  change: toggleColumnSelection,
  checked: true,
});
toggle.appendTo('#switch');

function toggleColumnSelection() {
  grid.selectionSettings.enableToggle = toggle.checked;
}

var dropdownData = [
  { text: 'Row', value: 'Row' },
  { text: 'Cell', value: 'Cell' },
  { text: 'Both', value: 'Both' },
];

var dropdownColumn = new ej.dropdowns.DropDownList({
  value: 'Row',
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: valueChange,
});
dropdownColumn.appendTo('#dropdown');

function valueChange(args) {
  grid.selectionSettings.mode = args.value;
}