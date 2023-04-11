

import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    allowResizing: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', minWidth: 100, width: 150, maxWidth: 300 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name',  minWidth: 120, width: 150, maxWidth: 250  },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country',  minWidth: 150, width: 200, maxWidth: 350  },
        { field: 'ShipPostalCode', headerText: 'Ship Postal code', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');



