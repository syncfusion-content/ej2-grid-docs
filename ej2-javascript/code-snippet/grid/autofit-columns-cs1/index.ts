import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    gridLines:'Both',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 80 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    dataBound: () => grid.autoFitColumns(['ShipName', 'ShipAddress']),
    height: 315
});
grid.appendTo('#Grid');