

import { Grid, Column, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Sort)

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let singlesort: Button = new Button({ cssClass: 'e-flat' }, '#SingleSort');
let multisort: Button = new Button({ cssClass: 'e-flat' }, '#MultiSort');

document.getElementById('SingleSort').addEventListener('click', () => {
    grid.sortColumn("OrderID","Descending")
});

document.getElementById('MultiSort').addEventListener('click', () => {
    grid.sortModule.sortSettings.columns.push({ field: 'ShipCity',  direction: 'Ascending' },{ field: 'ShipName', direction: 'Descending' });
    grid.refresh();
});



