import { Grid, Page, Selection, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  pageSettings: { pageCount: 5 },
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
      minWidth: 10,
    },

    {
      field: 'OrderDate',
      headerText: 'Order Date',
      textAlign: 'Right',
      width: 135,
      format: 'yMd',
      minWidth: 10,
    },
    {
      field: 'Freight',
      headerText: 'Freight',
      textAlign: 'Right',
      width: 120,
      format: 'C2',
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
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 140,
      minWidth: 10,
    },
  ],
});
grid.appendTo('#Grid');
