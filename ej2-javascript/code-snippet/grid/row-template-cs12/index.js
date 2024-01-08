ej.grids.Grid.Inject(ej.grids.Resize);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120},
    { field: 'Freight',headerText: 'Freight', width: 80},
    { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
  ]
});
grid.appendTo('#Grid');

var dropdown = new ej.dropdowns.DropDownList({
  dataSource: [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'ShipCountry', value: 'ShipCountry' }
  ],
  value: 'OrderID',
  popupHeight: '240px',
  width: '120px',
});
dropdown.appendTo('#dropdownlist');

var textbox = new ej.inputs.TextBox({
  placeholder: 'Enter new width',
  width: 140,
});
textbox.appendTo('#textboxvalue');

button = new ej.buttons.Button({
  content: 'Resize',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  grid.getColumnByField(dropdown.value).width = textbox.element.value;
  grid.refreshColumns();
}