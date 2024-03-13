var grid = new ej.grids.Grid({
  dataSource: data,
  allowSelection: false,
  enableHover: false,
  height:315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100, isFrozen: true },
    { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd', textAlign: 'Right' },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
    { field: 'ShipName', headerText: 'Ship Name', width: 130 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
    { field: 'ShipRegion', headerText: 'Ship Region', width: 80 },
    { field: 'ShipPostalCode', headerText: 'Ship Postal Code', width: 110 },
    { field: 'Freight', headerText: 'Freight', width: 80 }
  ]
});
grid.appendTo('#Grid');

var dropdownData=[
  { text: 'OrderID', value: 'OrderID' },
  { text: 'CustomerID', value: 'CustomerID' },
  { text: 'OrderDate', value: 'OrderDate' },
  { text: 'EmployeeID', value: 'EmployeeID' },
  { text: 'ShipName', value: 'ShipName' },
  { text: 'ShipCity', value: 'ShipCity' },
  { text: 'ShipCountry', value: 'ShipCountry' },
  { text: 'ShipRegion', value: 'ShipRegion' },
  { text: 'ShipPostalCode', value: 'ShipPostalCode' },
  { text: 'Freight', value: 'Freight' },
];

var dropDownList = new ej.dropdowns.DropDownList({
  index: 0,
  fields:{ text: 'text', value: 'value'},
  dataSource: dropdownData,
  width: 120,
  change: columnChange
});
dropDownList.appendTo('#dropdown');

function columnChange(args) {
  var selectedColumn = grid.getColumnByField(args.value);
  grid.columns.forEach((column) => {
      if (column.isFrozen) {
          column.isFrozen = false;
      }
  });
  if (selectedColumn) {
      selectedColumn.isFrozen = true;
  }
  grid.refreshColumns();
}