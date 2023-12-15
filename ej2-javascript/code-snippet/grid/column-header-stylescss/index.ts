import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150, textAlign: 'Right' },
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
    { field: 'Freight', headerText: 'Freight', width: 140, format: 'C2', textAlign: 'Right' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 130, format: 'yMd', textAlign: 'Right' },
  ]
});
grid.appendTo('#Grid');