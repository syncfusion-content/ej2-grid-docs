

import { Grid, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Sort);

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    height: '315px',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
});
grid.appendTo('#Grid');



