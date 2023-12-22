var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 150 },
    { field: 'ShipName', headerText: 'ShipName', width: 150 }
  ]
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
  checked: true,
  change: onSwitchChange,
});
toggle.appendTo('#switch');

function onSwitchChange(args) {
  if (args.checked) {
    grid.enableHover = true;
  } else {
    grid.enableHover = false;
  }
}