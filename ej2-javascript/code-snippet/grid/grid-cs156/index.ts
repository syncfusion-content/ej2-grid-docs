

import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    searchSettings: { fields: ['CustomerID'], operator: 'contains', key: 'Ha', ignoreCase: true, ignoreAccent: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 80 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 100 }
    ],
    height: 272
});
grid.appendTo('#Grid');