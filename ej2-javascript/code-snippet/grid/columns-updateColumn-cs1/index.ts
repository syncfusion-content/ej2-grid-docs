import { Grid, ColumnModel } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90, },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let update: Button = new Button({ cssClass: 'e-info' }, '#update');

(document.getElementById('update') as HTMLElement).onclick = () => {
    // Modifying column properties
    ((grid.columns[0])as ColumnModel).textAlign = 'Center';
    ((grid.columns[0])as ColumnModel).width = '100';
    ((grid.columns[2])as ColumnModel).visible = false;
    ((grid.columns[1])as ColumnModel).customAttributes = { class: 'customcss' };
     // Applying changes to the grid
    grid.refreshColumns();
};