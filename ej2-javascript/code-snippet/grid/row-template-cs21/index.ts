

import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    columnDragStart: () => {
        alert('columnDragStart event is Triggered');
    },
    columnDrag: () => {
        alert('columnDrag event is Triggered');
    },
    columnDrop: () => {
        alert('columnDrop event is Triggered');
    }
    height: 315
});
grid.appendTo('#Grid');



