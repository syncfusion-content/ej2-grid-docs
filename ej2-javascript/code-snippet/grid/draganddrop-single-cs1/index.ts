

import { Grid, RowDD, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(RowDD, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowRowDragAndDrop: true,
    heigth:300,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');



