

import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 130 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 }
    ],
    dataBound: () => grid.autoFitColumns(['ShipName', 'ShipAddress']),
    height: 315
});
grid.appendTo('#Grid');



