

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 120 },
                { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 140 }
    ],
    height: 315
});

grid.appendTo('#Grid');



