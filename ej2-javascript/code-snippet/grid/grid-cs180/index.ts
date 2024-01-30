import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  selectionSettings: { mode: 'Both', allowColumnSelection: true, type: 'Multiple' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    { field: 'Freight', headerText: 'Freight', width: 150 }
  ],
  height: 315
});
grid.appendTo('#Grid');

let button: Button = new Button({
  content: 'Clear Selection',
})
button.appendTo('#clear');

(document.getElementById('clear') as HTMLElement).onclick = () => {
  grid.clearSelection();
}