var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {    mode:'Cell', type: 'Multiple', persistSelection: true   },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right',isPrimaryKey: 'true', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry',headerText: 'Ship Country',width: 130 },
    { field: 'Freight',headerText: 'Freight',format: 'C2', width: 100 }
  ],
  height: 315,
});
grid.appendTo('#Grid');

var dialogVisible = true,
  button = new ej.buttons.Button({
    content: ' Show Selected Cell Indexes',
  });
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  var selectedCells = grid.getSelectedRowCellIndexes();
  dialog.visible = true;
  dialog.content = `<p><b>Selected Cell Indexes:</b></p><br> `
  for (var i = 0; i < selectedCells.length; i++) {
    dialog.content += `<p><li>Row: ${selectedCells[i].rowIndex}, cellIndex: ${selectedCells[i].cellIndexes} <p>`;
  }
};

var dialog = new ej.popups.Dialog({
  header: 'Selected Cell Indexes',
  showCloseIcon: 'true',
  position: '{ X: 300, Y: 100 }',
  width: '400px',
  visible: false,
  close: dialogClose
});
dialog.appendTo('#dialog');

function dialogClose() {
  dialogVisible = false;
}