import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Group, Sort } from '@syncfusion/ej2-grids';
import { data } from './data-source.ts';

Grid.Inject(Group, Sort);

let grid: Grid = new Grid({
  dataSource: data,
  allowGrouping: true,
  groupSettings:  {  columns: ['CustomerID', 'ShipCity']  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
  ],
  height: 267,
});
grid.appendTo('#Grid');

let button: Button = new Button({
  content: 'CLEAR GROUPING',
})
button.appendTo('#button');

(document.getElementById('button') as HTMLElement).onclick=function()
{
  grid.clearGrouping();
}

