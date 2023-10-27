var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: { mode: 'Cell', type: 'Single' },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
      { field: 'Freight', headerText: 'Freight', width: 150 },
  ],
  height: 315
});
grid.appendTo('#Grid');

var textbox = new ej.inputs.TextBox({
  placeholder: 'Enter the row index:',
  width: 140,
});
textbox.appendTo('#textboxvalue1');

var textbox1 = new ej.inputs.TextBox({
  placeholder: 'Enter the cell index:',
  width: 140,
});
textbox1.appendTo('#textboxvalue2');

button = new ej.buttons.Button({
  content: 'Select Cell',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function (args) {
  rowIndex = parseInt(textbox.element.value, 10);
  cellIndex = parseInt(textbox1.element.value, 10);
  if (!isNaN(rowIndex) && !isNaN(cellIndex)) {
    grid.selectCell({ rowIndex: rowIndex, cellIndex: cellIndex });
  }
};