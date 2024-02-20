var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: { mode: 'Row', type: 'Single' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
    { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
  ],
  height: 315,
});
grid.appendTo('#Grid');

var textbox = new ej.inputs.TextBox({
  placeholder: 'Enter Row Index',
  width: 140,
});
textbox.appendTo('#textboxvalue');

var button = new ej.buttons.Button({
  content: 'Select Row',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  rowIndex = parseInt(textbox.element.value, 10);
  if (!isNaN(rowIndex)) {
    grid.selectRow(rowIndex);
  }
};