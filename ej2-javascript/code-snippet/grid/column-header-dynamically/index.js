var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 100,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'Freight', headerText: 'Freight', width: 120 },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 100 },
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

document.getElementById('buttons').onclick = function () {
  if (textbox.value.trim() !== '') {
    let column = grid.getColumnByField(dropdown.value);

    column.headerText = textbox.value;
    grid.refreshHeader();
  }
};
