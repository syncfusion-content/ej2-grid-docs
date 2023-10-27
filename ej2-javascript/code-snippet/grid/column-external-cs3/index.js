var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings: {  allowColumnSelection: true, type: 'Multiple'  },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2'} 
    ],
    height: 315
});
grid.appendTo('#Grid');

var textbox1 = new ej.inputs.TextBox({
  width: 140,
});
textbox1.appendTo('#textboxvalue1');

var textbox2 = new ej.inputs.TextBox({
  width: 140,
});
textbox2.appendTo('#textboxvalue2');

var button = new ej.buttons.Button({
  content: 'Select Columns',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function (args) {
  startIndex = parseInt(textbox1.value, 10); 
  endIndex = parseInt(textbox2.value, 10); 
  grid.selectionModule.clearRowSelection();
  if (!isNaN(startIndex) && !isNaN(endIndex)) {
    grid.selectionModule.selectColumnsByRange(startIndex, endIndex);
  }
};