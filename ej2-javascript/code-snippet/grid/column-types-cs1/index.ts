

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
      { type: 'checkbox', width: 90 },
      { field: 'OrderID', headerText: 'Order ID', width: 90, textAlign: 'Right',
        type: 'number' },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120, type: 'string' },
      { field: 'Freight', width: 90, format: 'C2', textAlign: 'Right', type: 'number' },
      { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd',
        textAlign: 'Right', type: 'date' },
      { field: 'ShippedDate', headerText: 'Shipped Date', width: 200, format: 'dd/MM/yyyy hh:mm', textAlign: 'Right', type: 'dateTime' },
      { field: 'Verified', headerText: 'Verified', width: 100, type: 'boolean',
        displayAsCheckBox: true },
    ],
    height: 315
});
grid.appendTo('#Grid');



