ej.grids.Grid.Inject(ej.grids.Page);

var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {  mode: 'Row', type: 'Single'  },
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150,textAlign: 'Right' },
    {
      field: 'ShipCountry',headerText: 'Ship Country',width: 150,textAlign: 'Right'
    },
    {
      field: 'Freight',headerText: 'Freight', width: 100, textAlign: 'Right',format: 'C2',
    }
  ],
  height: 315,
});
grid.appendTo('#Grid');

var textbox = new ej.inputs.TextBox({
  placeholder: 'Enter Row Index',
  width: 140,
});
textbox.appendTo('#textboxvalue');

button = new ej.buttons.Button({
  content: 'Select Cell',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function (args) {
    rowIndex = parseInt(textbox.element.value, 10);
    if (!isNaN(rowIndex)) {
      grid.selectRow(rowIndex);
    }
};