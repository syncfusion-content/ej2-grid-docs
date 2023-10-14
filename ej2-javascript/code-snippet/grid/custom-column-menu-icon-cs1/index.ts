import { Grid, ColumnMenu } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(ColumnMenu);

let grid: Grid = new Grid({
    dataSource: data,
    height: 315,
    showColumnMenu: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', format:'C2', width: 90 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }   
    ]
});
grid.appendTo('#Grid');



