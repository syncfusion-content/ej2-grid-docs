import { Button } from '@syncfusion/ej2-buttons';
import { Grid,Page,Selection } from '@syncfusion/ej2-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource.ts';

Grid.Inject(Page,Selection);

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: {   mode: 'Row',type: 'Multiple'  },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'ShipCountry',headerText: 'Ship Country',width: 130 },
      { field: 'Freight',headerText: 'Freight',format: 'C2', width: 100 }
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
  placeholder: 'Enter the end row index:',
  width: 140,
});
textbox1.appendTo('#textboxvalue2');

let button: Button = new Button({
  content: 'Select Rows',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  let startIndex = parseInt(textbox.value, 10); 
  let endIndex = parseInt(textbox1.value, 10); 
  grid.selectionModule.clearRowSelection();
  if (!isNaN(startIndex) && !isNaN(endIndex)) {
    grid.selectionModule.selectRowsByRange(startIndex, endIndex);
  }
};