import { Button } from '@syncfusion/ej2-buttons';
import { Grid } from '@syncfusion/ej2-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  selectionSettings: { mode: 'Cell', type: 'Single' },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
      { field: 'Freight', headerText: 'Freight',format: 'C2', width: 100 },
  ],
  height: 315
});
grid.appendTo('#Grid');

let textbox: TextBox = new TextBox({
  placeholder: 'Enter the row index:',
  width: 140,
});
textbox.appendTo('#textboxvalue1');

let textbox1: TextBox = new TextBox({
  placeholder: 'Enter the cell index:',
  width: 140,
});
textbox1.appendTo('#textboxvalue2');

let button: Button = new Button({
  content: 'Select Cell',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  let rowIndex = parseInt(textbox.element.value, 10);
  let cellIndex = parseInt(textbox1.element.value, 10);
  if (!isNaN(rowIndex) && !isNaN(cellIndex)) {
    grid.selectCell({ rowIndex: rowIndex, cellIndex: cellIndex });
  }
};