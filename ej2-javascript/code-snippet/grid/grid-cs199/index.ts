import { Button } from '@syncfusion/ej2-buttons';
import { Grid,Page } from '@syncfusion/ej2-grids';
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

let button: Button = new Button({
  content: 'Clear Cell Selection',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  grid.clearCellSelection();
};