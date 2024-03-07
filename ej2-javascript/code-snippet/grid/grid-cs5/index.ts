import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid(
    {
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 100, format: 'C2' },
            { field: 'Verified', headerText: 'Verified', width: 150, displayAsCheckBox: true }
        ],
        height: 315
    });
grid.appendTo('#Grid');