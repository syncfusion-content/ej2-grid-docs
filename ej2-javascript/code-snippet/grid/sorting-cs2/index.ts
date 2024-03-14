import { Grid, Sort, ForeignKey } from '@syncfusion/ej2-grids';
import { data, customerData} from './datasource.ts';

Grid.Inject(Sort,ForeignKey);

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100, foreignKeyValue:'ContactName',foreignKeyField:'CustomerID', dataSource:customerData },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 315
});
grid.appendTo('#Grid');