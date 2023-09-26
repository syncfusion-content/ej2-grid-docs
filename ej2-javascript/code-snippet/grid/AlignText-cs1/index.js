
var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
    { field: 'Freight', format: 'C', width: 120 },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 140 },
  ],
  height: 315,
});
grid.appendTo('#Grid');

let alignmentData = [
  { text: 'Left', value: 'Left' },
  { text: 'Right', value: 'Right' },
  { text: 'Center', value: 'Center' },
  { text: 'Justify', value: 'Justify' }
]

let dropdownList = new ej.dropdowns.DropDownList({
  value: 'Left',
  popupHeight: '240px',
  width: 100,
  dataSource: alignmentData,
  change: changeAlignment,
});
dropdownList.appendTo('#dropdown');
function changeAlignment(args) {
  grid.columns.forEach((column) => {
    column.headerTextAlign = args.value
  })
  grid.refreshHeader();
}