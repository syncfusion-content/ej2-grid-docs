var grid = new ej.grids.Grid({
  dataSource: data,
  frozenRows: 2,
  allowSelection: false,
  enableHover: false,
  height:315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd', textAlign: 'Right' },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
    { field: 'ShipName', headerText: 'Ship Name', width: 130 },
    { field: 'ShipAddress', headerText: 'Ship Address', width: 140 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
    { field: 'ShipRegion', headerText: 'Ship Region', width: 80 },
    { field: 'ShipPostalCode', headerText: 'Ship Postal Code', width: 110 },
    { field: 'Freight', headerText: 'Freight', width: 80 }
  ]
});
grid.appendTo('#Grid');

var numeric = new ej.inputs.NumericTextBox({
  min: 0,
  max: 5,
  validateDecimalOnType:true,
  decimals:0,
  format:'n',
  value: 2,
  width: '100px'
});
numeric.appendTo('#frozenRows');

var button = new ej.buttons.Button({ content: 'Update' });
button.appendTo('#updateButton');

document.getElementById('updateButton').addEventListener('click', function() {
  var inputValue = parseInt(document.getElementById('frozenRows').value);
  grid.frozenRows = inputValue;
});