
var grid = new ej.grids.Grid({
  dataSource: data,

  allowPaging: true,

  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
    { field: 'CustomerName', headerText: 'Customer Name', width: 150, showInColumnChooser: false },
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
    { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
    { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
    { field: 'ShipCountry', visible: false, headerText: 'Ship Country', width: 150 },
    { field: 'ShipCity', visible: false, headerText: 'Ship City', width: 150 }
  ]
});
grid.appendTo('#Grid');

let dropdownData = ['Left', 'Right', 'Center', 'Justify'];
let dropdownList = new ej.dropdowns.DropDownList({
  value: 'Left',
  popupHeight: '200px',
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