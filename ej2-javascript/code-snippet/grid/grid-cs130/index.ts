

import { Grid, Filter, Page, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page, Sort);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
               { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    allowSorting: true
});

grid.appendTo('#Grid');



