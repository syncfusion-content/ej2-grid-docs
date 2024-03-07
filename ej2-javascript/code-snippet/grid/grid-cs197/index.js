ej.grids.Grid.Inject(ej.grids.Page);

var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {   type: 'Multiple', mode: 'Cell'   },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150,textAlign: 'Right' },
    { field: 'ShipCountry',headerText: 'Ship Country',width: 150,textAlign: 'Right' },
    { field: 'Freight',headerText: 'Freight', width: 100, textAlign: 'Right',format: 'C2' }
  ],
  height: 315
});
grid.appendTo('#Grid');

var textbox = new ej.inputs.TextBox({
  placeholder: 'Enter the start row index:',
  width: 140,
});
textbox.appendTo('#textboxvalue1');

var textbox1 = new ej.inputs.TextBox({
  placeholder: 'Enter the start column index:',
  width: 140,
});
textbox1.appendTo('#textboxvalue2');

var textbox2 = new ej.inputs.TextBox({
  placeholder: 'Enter the end row index:',
  width: 140,
});
textbox2.appendTo('#textboxvalue3');

var textbox3 = new ej.inputs.TextBox({
  placeholder: 'Enter the end column index:',
  width: 140,
});
textbox3.appendTo('#textboxvalue4');

var button = new ej.buttons.Button({
  content: 'Select range of Cell',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  var startRowIndex = parseInt(textbox.value, 10);
  var startColumnIndex = parseInt(textbox1.value, 10);
  var endRowIndex = parseInt(textbox2.value, 10);
  endColumnIndex = parseInt(textbox3.value, 10);
  grid.clearCellSelection();
  if (!isNaN(startRowIndex) && !isNaN(startColumnIndex) && !isNaN(endRowIndex) && !isNaN(endColumnIndex)) {
     grid.selectCellsByRange({ rowIndex: startRowIndex, cellIndex: startColumnIndex }, { rowIndex: endRowIndex, cellIndex: endColumnIndex });
    }
};