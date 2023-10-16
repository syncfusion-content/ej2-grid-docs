import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 100 }
    ],

});
grid.appendTo('#Grid');