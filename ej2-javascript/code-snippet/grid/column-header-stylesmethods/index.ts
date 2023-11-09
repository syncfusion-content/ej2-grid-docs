import { Grid, Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  dataBound: dataBound,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
    {
      field: 'Freight',
      headerText: 'Freight($)',
      textAlign: 'Right',
      width: 120,
      format: 'C2',
    },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 140,
    },
  ],
});
grid.appendTo('#Grid');

function dataBound() {
  (grid.getColumnHeaderByIndex(0) as HTMLElement).style.color = '#0d0b0b';
  (grid.getColumnHeaderByField('CustomerID') as HTMLElement).style.background = '#f45ddeab';
  (grid.getColumnHeaderByField('CustomerID')as HTMLElement).style.color = '#0d0b0b';
  (grid.getColumnHeaderByUid('grid-column2')as HTMLElement).style.background = '#f45ddeab';
  const columnIndex = grid.getColumnIndexByField('ShipCountry');
  (grid.getColumnHeaderByIndex(columnIndex)as HTMLElement).style.color = '#0d0b0b';
  const index = grid.getColumnIndexByUid('grid-column2');
  (grid.getColumnHeaderByIndex(index)as HTMLElement).style.color = '#0d0b0b';
}
