import { Grid, Page, Group, LazyLoadGroup } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Group, LazyLoadGroup);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowGrouping: true,
    groupSettings: { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'ProductName', headerText: 'Product Name', width: 100 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 80 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 120 }
    ],
    height: 240
});
grid.appendTo('#Grid');