import { Button } from '@syncfusion/ej2-buttons';
import { Grid,Page } from '@syncfusion/ej2-grids';
import { Dialog } from '@syncfusion/ej2-popups';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: {  type: 'Multiple', mode: 'Cell'   },
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
    height: 315
});
grid.appendTo('#Grid');

let dialogVisible = true,
button: Button = new Button({
  content: ' Show Selected Cell Indexes',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function (args) {
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
  width: '400px',
  visible: false,
  close: dialogClose,
});
dialog.appendTo('#dialog');

function dialogClose() {
  dialogVisible = false;
}