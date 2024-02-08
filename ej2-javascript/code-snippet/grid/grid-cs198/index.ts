import { Button } from '@syncfusion/ej2-buttons';
import { Grid,Page } from '@syncfusion/ej2-grids';
import { Dialog } from '@syncfusion/ej2-popups';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
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

let dialogVisible = true,
button: Button = new Button({
  content: ' Show Selected Cell Indexes',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  let selectedCells = grid.getSelectedRowCellIndexes();
  dialog.visible = true;
  dialog.content = `<p><b>Selected Cell Indexes:</b></p><br> `
  for (let i = 0; i < selectedCells.length; i++) {
    console.log(selectedCells[i])
    dialog.content += `<p><li>Row: ${selectedCells[i].rowIndex}, cellIndex: ${selectedCells[i].cellIndexes} <p>`;
  }
};

let dialog: Dialog = new Dialog({
  header: 'Selected Cell Indexes',
  showCloseIcon: true,
  position: '{ X: 300, Y: 100 }',
  width: '400px',
  visible: false,
  close: dialogClose
});
dialog.appendTo('#dialog');

function dialogClose() {
  dialogVisible = false;
}