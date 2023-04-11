

import { Grid, Group, LazyLoadGroup, InfiniteScroll } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
Grid.Inject(Group, LazyLoadGroup, InfiniteScroll);
let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    enableInfiniteScrolling: true,
    groupSettings: { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 160 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
    ]
    height: 240
});
grid.appendTo('#Grid');


