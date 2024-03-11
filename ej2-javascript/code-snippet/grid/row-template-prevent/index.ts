import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID',textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', allowResizing: false, width: 120},
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'Freight',headerText: 'Freight', width: 80}
  ]
});
grid.appendTo('#Grid');