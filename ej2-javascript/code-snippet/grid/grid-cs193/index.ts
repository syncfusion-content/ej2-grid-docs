import { Grid, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  selectionSettings: { mode: 'Cell', type: 'Multiple' },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
      { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
      { field: 'OrderDate',headerText: 'Order Date',width: 130,format: 'yMd',textAlign: 'Right' },
      { field: 'Freight',headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
  ],
  height: 315
});
grid.appendTo('#Grid');