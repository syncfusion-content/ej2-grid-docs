

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right',  width: 120, format: 'C' },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 ,visible: false},
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 315
});

grid.appendTo('#Grid');



