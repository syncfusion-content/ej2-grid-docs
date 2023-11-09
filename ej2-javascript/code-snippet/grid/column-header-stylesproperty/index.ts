import { Grid, Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  columns: [
    {
      field: 'OrderID',
      customAttributes: { class: 'customcss' },
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
      minWidth: 10,
    },
    { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
    {
      field: 'OrderDate',
      customAttributes: { class: 'customcss' },
      headerText: 'Order Date',
      textAlign: 'Right',
      width: 135,
      format: 'yMd',
      minWidth: 10,
    },
    {
      field: 'ShippedDate',
      headerText: 'Shipped Date',
      textAlign: 'Right',
      width: 145,
      format: 'yMd',
      minWidth: 10,
    },
  ],
});
grid.appendTo('#Grid');
