import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    allowResizing: true,
    height: 315,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 80 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 100 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
    ]
});
grid.appendTo('#Grid');