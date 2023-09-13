
var grid = new ej.grids.Grid({
  dataSource: data,

  allowPaging: true,

  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120},
    { field: 'CustomerID', headerText: 'Customer ID', width: 120},
    { field: 'Freight', width: 120, format: 'C2'},
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd'},
  ]
});
grid.appendTo('#Grid');

let dropdownData = ['Left', 'Right', 'Center', 'Justify'];
let dropdownList = new ej.dropdowns.DropDownList({
  value: 'Left',
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: change,
});
dropdownList.appendTo('#dropdown');
function change(args) {
  grid.columns.forEach((column) => {
    column.headerTextAlign = args.value
  })
  grid.refreshHeader();
}