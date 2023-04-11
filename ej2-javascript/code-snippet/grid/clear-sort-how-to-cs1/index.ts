

import { Grid, Column, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Sort)

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting:true,
    sortSettings: { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'CustomerID', direction: 'Descending' },{ field: 'ShipCity', direction: 'Ascending' },{ field: 'ShipName', direction: 'Descending' }] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let singleclear: Button = new Button({ cssClass: 'e-flat' }, '#SingleClearSort');
let multiclear: Button = new Button({ cssClass: 'e-flat' }, '#MultiClearSort');

document.getElementById('SingleClearSort').addEventListener('click', () => {
    let column: Column = grid.sortModule.sortSettings.columns;
    for(let i=0;i < column.length;i++){
        if(column[i].field === "OrderID") {
            column.splice(i,1);
            grid.refresh();
        }
    }
});

document.getElementById('MultiClearSort').addEventListener('click', () => {
    grid.clearSorting();
});



