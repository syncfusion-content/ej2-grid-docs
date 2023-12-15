import { Button } from '@syncfusion/ej2-buttons';
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 135, format: 'yMd' },
    { field: 'Freight', headerText: 'Freight($)', textAlign: 'Right', width: 120, format: 'C2' },
    { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 100 },
  ],
});
grid.appendTo('#Grid');

let button = new Button({
  content: 'Refresh Header',
});
button.appendTo('#buttons');

(<HTMLElement>document.getElementById('buttons')).onclick = function () {
  let column = grid.getColumnByIndex(1);
  column.headerText = 'New Header Text'; // update the header text of the column object
  grid.refreshHeader();
};
