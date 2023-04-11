

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid(
    {
        dataSource: data.slice(0,10),
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            {
                field: 'CustomerID', headerText: 'Customer ID', width: 150
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right' },
            { field: 'ShipName', headerText: 'Ship Name', width: 180 },
            { field: 'Verified', headerText: 'Verified', width: 150, displayAsCheckBox: true }
        ],
        height: 315
    });
grid.appendTo('#Grid');



