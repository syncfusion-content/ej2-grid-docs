import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { Dialog } from '@syncfusion/ej2-popups';
import { data } from './datasource.ts';

Grid.Inject(Page,Selection);

let grid: Grid = new Grid({
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

let dialogVisible = true,
  button: Button = new Button({
    content: 'Show Selected Records',
  });
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  let selectedRecords = grid.getSelectedRecords();
  dialog.visible = true;
  dialog.content = ''
  for (let i = 0; i < selectedRecords.length; i++) {
    dialog.content += `<p><b>OrderID:</b> ${(selectedRecords[i]).OrderID}</p>`;
  }
};

let dialog: Dialog = new Dialog({
  header: 'Selected Records',
  showCloseIcon: true,
  position: { X: 300, Y: 100 },
  width: '400px',
  visible: false,
  close: dialogClose,
});
dialog.appendTo('#dialog');

function dialogClose() {
  dialogVisible = false;
}