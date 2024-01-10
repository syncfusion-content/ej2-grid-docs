

import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { mode: 'Cell', type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd'},
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2'},
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315,
});
grid.appendTo('#Grid');



