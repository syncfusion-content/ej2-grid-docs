

import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { showDropArea: false, columns: ['OrderDate', 'Freight'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMMM', enableGroupByFormat: true, width: 150 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', enableGroupByFormat: true, width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');



