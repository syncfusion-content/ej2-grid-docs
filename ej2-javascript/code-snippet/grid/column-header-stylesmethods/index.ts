import { Grid, Page, Selection} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  dataBound: dataBound,
  pageSettings: { pageCount: 5 },
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
  (grid.getColumnHeaderByIndex(0) as any).style.color = '#0d0b0b';
  (grid as any).getColumnHeaderByField('CustomerID').style.background ='#f45ddeab';
  (grid as any).getColumnHeaderByField('CustomerID').style.color = '#0d0b0b';
  const columnIndex = (grid as any).getColumnIndexByField('ShipCountry');
  (grid as any).getColumnHeaderByIndex(columnIndex).style.color = '#0d0b0b';
}
