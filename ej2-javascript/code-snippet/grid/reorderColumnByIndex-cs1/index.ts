

import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

let reorderByIndex: Button = new Button({ cssClass: 'e-info' }, '#reorderByIndex');
(document.getElementById('reorderByIndex') as HTMLElement).onclick = function () {
  grid.reorderColumnByIndex(1, 3); // move column at index 1 to index 3
};


