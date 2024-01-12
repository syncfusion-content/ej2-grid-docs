import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 100, textAlign: 'Center', minWidth: 10 },
    {
      headerText: 'Order Details', columns: [
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120, textAlign: 'Right', minWidth: 10, allowResizing: false },
        { field: 'Freight', headerText: 'Freight($)', width: 100, format: 'C1', textAlign: 'Right', minWidth: 10 },
      ]
    },
    {
      headerText: 'Ship Details', columns: [
        { field: 'ShipCity', headerText: 'Ship City', width: 100, minWidth: 10, allowResizing: false },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 120, minWidth: 10 },
      ]
    }
  ]
});
grid.appendTo('#Grid');