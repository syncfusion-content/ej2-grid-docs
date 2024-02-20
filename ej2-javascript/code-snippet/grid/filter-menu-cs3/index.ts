import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let filterParams = { params: { autofill: false } };
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Name', filter: filterParams },
        { field: 'ShipName', headerText: 'Ship Name' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2' }
    ],
});     
grid.appendTo('#Grid');