

import { Grid, Selection } from '@syncfusion/ej2-grids';
import { sdata } from './datasource.ts';

Grid.Inject(Selection);

let grid: Grid = new Grid({
    dataSource: sdata,
    selectionSettings: {type: 'Multiple', enableSimpleMultiRowSelection: true},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
     ]
});
grid.appendTo('#Grid');



