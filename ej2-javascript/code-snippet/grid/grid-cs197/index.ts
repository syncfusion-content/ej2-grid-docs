import { Button } from '@syncfusion/ej2-buttons';
import { Grid,Page } from '@syncfusion/ej2-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
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

let textbox: TextBox = new TextBox({
  placeholder: 'Enter the start row index:',
  width: 140,
});
textbox.appendTo('#textboxvalue1');

let textbox1: TextBox = new TextBox({
  placeholder: 'Enter the start column index:',
  width: 140,
});
textbox1.appendTo('#textboxvalue2');

let textbox2: TextBox = new TextBox({
  placeholder: 'Enter the end row index:',
  width: 140,
});
textbox2.appendTo('#textboxvalue3');

let textbox3: TextBox = new TextBox({
  placeholder: 'Enter the end column index:',
  width: 140,
});
textbox3.appendTo('#textboxvalue4');

let button: Button = new Button({
  content: 'Select range of Cell',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  let startRowIndex = parseInt(textbox.value, 10);
  let startColumnIndex = parseInt(textbox1.value, 10);
  let endRowIndex = parseInt(textbox2.value, 10);
  let endColumnIndex = parseInt(textbox3.value, 10);
  grid.clearCellSelection();
  if (!isNaN(startRowIndex) && !isNaN(startColumnIndex) && !isNaN(endRowIndex) && !isNaN(endColumnIndex)) {
     grid.selectCellsByRange({ rowIndex: startRowIndex, cellIndex: startColumnIndex }, { rowIndex: endRowIndex, cellIndex: endColumnIndex });
    }
};