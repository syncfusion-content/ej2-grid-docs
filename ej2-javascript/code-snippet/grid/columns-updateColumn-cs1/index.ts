

import { Grid,ColumnModel } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';


let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' }
    ],
    height: 280
});
grid.appendTo('#Grid');

let updateColumns: Button = new Button({ cssClass: 'e-info' }, '#update');

document.getElementById('update').onclick = () => {
    ((grid.columns[0])as ColumnModel).textAlign = 'Center';
    ((grid.columns[0])as ColumnModel).width = '100';
    ((grid.columns[2])as ColumnModel).visible = false;
    ((grid.columns[1])as ColumnModel).customAttributes = { class: 'customcss' };
  grid.refreshColumns();//show by HeaderText
};



