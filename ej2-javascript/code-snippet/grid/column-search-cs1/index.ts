import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    searchSettings: { fields: ['CustomerID', 'Freight', 'ShipCity']},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Center',format:'C2', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 }
    ],
    toolbar: ['Search'],
    height: 260
});
grid.appendTo('#Grid');