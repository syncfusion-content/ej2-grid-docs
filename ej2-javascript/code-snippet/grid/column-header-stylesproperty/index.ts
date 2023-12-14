import { Grid, Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  columns: [
    {field: 'OrderID',headerText: 'Order ID',customAttributes: { class: 'customcss' },textAlign: 'Center'},
    { field: 'CustomerName', headerText: 'Customer Name', textAlign: 'Center'},
    {field: 'Freight',headerText: 'Freight',customAttributes: { class: 'customcss' },textAlign: 'Center'},
    {field: 'OrderDate',headerText: 'Order Date',format: 'yMd',textAlign: 'Center'}
  ],
});
grid.appendTo('#Grid');