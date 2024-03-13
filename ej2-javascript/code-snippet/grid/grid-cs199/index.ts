import { Button } from '@syncfusion/ej2-buttons';
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  selectionSettings: {type: 'Multiple', mode: 'Cell'},
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry',headerText: 'Ship Country',width: 130 },
    { field: 'Freight',headerText: 'Freight',format: 'C2', width: 100 }
  ],
  height: 315
});
grid.appendTo('#Grid');

let button: Button = new Button({
  content: 'Clear Cell Selection',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  grid.clearCellSelection();
};