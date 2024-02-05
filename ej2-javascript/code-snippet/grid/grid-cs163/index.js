var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  pageSettings: { pageSize: 5 },
  selectionSettings: { type: 'Multiple',persistSelection:true },
  columns: [
    { type: 'checkbox', width: 50 },
    { field: 'OrderID', headerText: 'Order ID',isPrimaryKey: 'true', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
    { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
  ],
  height: 315
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button({
  content: 'Show Selected Records',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  selectedRecords = grid.getSelectedRecords();
  dialog.visible = true;
  dialog.content = ''
  for (var i = 0; i < selectedRecords.length; i++) {
    dialog.content += `<p><b>OrderID:</b> ${selectedRecords[i].OrderID}</p><br>`;
  }
};

var dialog = new ej.popups.Dialog({
  header: 'Selected Records',
  showCloseIcon: 'true',
  position: { X: 300, Y: 100 },
  width: '400px',
  visible: false,
  close: dialogClose,
});
dialog.appendTo('#dialog');

function dialogClose() {
  dialogVisible = false;
}