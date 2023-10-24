import { Button } from '@syncfusion/ej2-buttons';
import { Grid } from '@syncfusion/ej2-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource.ts';
let grid: Grid = new Grid({
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

let rowIndex: number;

let textbox: TextBox = new TextBox({
  placeholder: 'Enter Row Index',
  width: 140,
});
textbox.appendTo('#textboxvalue');

let button: Button = new Button({
  content: 'Select Cell',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function (args) {
  rowIndex = parseInt(textbox.element.value, 10);
    if (!isNaN(rowIndex)) {
      grid.selectRow(rowIndex);
    }
};