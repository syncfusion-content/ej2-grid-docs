import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';
import { TextBox } from '@syncfusion/ej2-inputs';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { allowColumnSelection: true, type: 'Single' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2'} 
    ],
    height: 315
});
grid.appendTo('#Grid');

let textbox: TextBox = new TextBox({
    width: 140
});
textbox.appendTo('#textboxvalue');
  
let button: Button = new Button({
    content: 'Select Column',
});
button.appendTo('#buttons');
  
(document.getElementById('buttons')as HTMLElement).onclick = function (args) {
   let columnIndex = parseInt(textbox.element.value, 10);
    if (!isNaN(columnIndex)) {
      grid.selectionModule.selectColumn(columnIndex);
    }
};