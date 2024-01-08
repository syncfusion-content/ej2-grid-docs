ej.grids.Grid.Inject(ej.grids.Resize);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'Freight', headerText: 'Freight', width: 80 }
  ]
});
grid.appendTo('#Grid');

var dropdown = new ej.dropdowns.DropDownList({
  dataSource: [
    { text: 'Normal', value: 'Normal' },
    { text: 'Auto', value: 'Auto' }
  ],
  popupHeight: '240px',
  width: '120px',
  value: 'Normal',
  change: change,
});
dropdown.appendTo('#dropdownlist');

function change(args) {
  grid.resizeSettings.mode = args.value;
}