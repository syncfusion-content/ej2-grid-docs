var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {   mode: 'Row',type: 'Multiple'   },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry',headerText: 'Ship Country',width: 130 },
    { field: 'Freight',headerText: 'Freight',format: 'C2', width: 100 }
  ],
  height: 315,
});
grid.appendTo('#Grid');

var textbox = new ej.inputs.TextBox({
  placeholder: 'Enter the start row index:',
  width: 140,
});
textbox.appendTo('#textboxvalue1');

var textbox1 = new ej.inputs.TextBox({
  placeholder: 'Enter the end row index:',
  width: 140,
});
textbox1.appendTo('#textboxvalue2');

var button = new ej.buttons.Button({
  content: 'Select Rows',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  var startIndex = parseInt(textbox.value, 10); 
  var endIndex = parseInt(textbox1.value, 10); 
  grid.selectionModule.clearRowSelection();
  if (!isNaN(startIndex) && !isNaN(endIndex)) {
    grid.selectionModule.selectRowsByRange(startIndex, endIndex);
  }
};