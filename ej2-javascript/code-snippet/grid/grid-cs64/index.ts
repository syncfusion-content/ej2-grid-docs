import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 5 },
    allowFiltering: true,
    filterSettings: { type:'FilterBar' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'OrderDate', width: 100, format: 'yMd'},
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');