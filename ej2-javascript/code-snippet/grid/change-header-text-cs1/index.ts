

import { Grid, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let btn: Button = new Button({ cssClass: 'e-flat' }, '#change-text');

document.getElementById('change-text').addEventListener('click', () => { // changing the header text for ShipCity column.
    let column: Column = grid.getColumnByField("ShipCity"); // get the JSON object of the column corresponding to the field name.
    column.headerText = "Changed Text"; // assign a new header text to the column.
    grid.refreshHeader();
});



