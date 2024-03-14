import { Grid, Filter, Page, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page, Sort);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type:'Excel' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right',format: 'C2', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right',format: 'yMd', width: 120 }
    ],
    height: 273
});
grid.appendTo('#Grid');