var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 100,
      headerValueAccessor: headerValueAccessor,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120, headerValueAccessor: headerValueAccessor },
    { field: 'Freight', headerText: 'Freight', width: 120, headerValueAccessor: headerValueAccessor },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 100, headerValueAccessor: headerValueAccessor },
  ],
  height: 280,
});
grid.appendTo('#Grid');
var dropdown = new ej.dropdowns.DropDownList({
  dataSource: [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'OrderDate', value: 'OrderDate' },
  ],
  value: 'OrderID',
  popupHeight: '240px',
  width: '120px',
});
dropdown.appendTo('#dropdownlist');
var textbox = new ej.inputs.TextBox({
  placeholder: 'Enter new header text',
  width: 140,
});
textbox.appendTo('#textboxvalue');

button = new ej.buttons.Button({
  content: 'Click',
});
button.appendTo('#buttons');

function headerValueAccessor(field, columns) {
  if (textbox && textbox.value && textbox.value.trim() !== '' && columns.field === dropdown.value) {
    columns.headerText = textbox.value;
  }
}
document.getElementById('buttons').onclick = function () {
  grid.refreshHeader();
};
