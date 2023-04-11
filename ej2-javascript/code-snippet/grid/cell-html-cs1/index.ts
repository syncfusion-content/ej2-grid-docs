

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: '<span> Order ID </span>', disableHtmlEncode: true, textAlign: 'Right', width: 140 },
        { field: 'CustomerID', headerText: '<span> Customer ID </span>', disableHtmlEncode: false, width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315
});
grid.appendTo('#Grid');



