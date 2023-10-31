ej.grids.Grid.Inject(ej.grids.Page);

var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: {    mode:'Cell', type: 'Multiple', persistSelection: true   },
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

let dialogVisible = true,
  button = new ej.buttons.Button({
    content: ' Show Selected Cell Indexes',
  });
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function (args) {
  selectedCells = grid.getSelectedRowCellIndexes();
  dialog.visible = true;
  dialog.content = `<p><b>Selected Cell Indexes:</b></p><br> `
  for (let i = 0; i < selectedCells.length; i++) {
    dialog.content += `<p><li>Row: ${selectedCells[i].rowIndex}, cellIndex: ${selectedCells[i].cellIndexes} <p>`;
  }
};

var dialog = new ej.popups.Dialog({
  header: 'Selected Cell Indexes',
  showCloseIcon: 'true',
  width: '400px',
  visible: false,
  close: dialogClose,
});
dialog.appendTo('#dialog');

function dialogClose() {
  dialogVisible = false;
}