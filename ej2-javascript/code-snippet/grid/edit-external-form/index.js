class Order {
  constructor() {
      this.OrderID = null;
      this.CustomerID = null;
      this.Freight = null;
      this.ShipCountry = null;
  }
}

ej.grids.Grid.Inject(ej.grids.Edit);
var grid = new ej.grids.Grid({
  dataSource: data,
  height: 315,
  width: '500px',
  editSettings: { allowEditing: true },
  columns: [
      { field: 'OrderID', headerText: 'OrderID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'CustomerID', textAlign: 'Right', width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 120 },
      { field: 'ShipCountry', headerText: 'ShipCountry', textAlign: 'Right', width: 120 }
  ],
  rowSelected: rowSelectHandler
});
grid.appendTo('#Grid');

var dropdownData = [
  { shipCountry: 'Germany' },
  { shipCountry: 'Brazil' },
  { shipCountry: 'France' },
  { shipCountry: 'Belgium' },
  { shipCountry: 'Switzerland' },
  { shipCountry: 'Venezuela' },
  { shipCountry: 'USA' },
  { shipCountry: 'Mexico' },
  { shipCountry: 'Italy' },
  { shipCountry: 'Sweden' },
  { shipCountry: 'Finland' },
  { shipCountry: 'Spain' },
  { shipCountry: 'Canada' },
  { shipCountry: 'Portugal' },
  { shipCountry: 'Denmark' },
  { shipCountry: 'Austria' },
  { shipCountry: 'UK' },
  { shipCountry: 'Ireland' },
  { shipCountry: 'Norway' },
  { shipCountry: 'Argentina' },
];

var selectedProduct = new Order();

var orderIDTextbox = new ej.inputs.NumericTextBox({ 
  format: '###.##',
  value: selectedProduct.OrderID, 
});
orderIDTextbox.appendTo('#orderID');

var customerIDTextbox = new ej.inputs.TextBox({ 
  value: selectedProduct.CustomerID,
  change: function() {
      selectedProduct.CustomerID = customerIDTextbox.value;
  }
});
customerIDTextbox.appendTo('#customerID');

var freightTextbox = new ej.inputs.NumericTextBox({ 
  value: selectedProduct.Freight,
  change: function() {
      selectedProduct.Freight = freightTextbox.value;
  }
});
freightTextbox.appendTo('#freight');

var countryDropdown =  new ej.dropdowns.DropDownList({
  dataSource: dropdownData,
  fields: { text: 'shipCountry', value: 'shipCountry' },
  value: selectedProduct.ShipCountry,
  change: function() {
      selectedProduct.ShipCountry = countryDropdown.value;
  }
});
countryDropdown.appendTo('#country');


document.getElementById('buttons').onclick = function () { 
  var index = grid.getSelectedRowIndexes()[0];
  grid.updateRow(index, selectedProduct);
};

function rowSelectHandler(args) {
  selectedProduct = Object.assign({}, args.data);
  orderIDTextbox.value = selectedProduct.OrderID;
  customerIDTextbox.value = selectedProduct.CustomerID;
  freightTextbox.value = selectedProduct.Freight;
  countryDropdown.value = selectedProduct.ShipCountry;
}