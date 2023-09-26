

import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let show: Button = new Button({ cssClass: 'e-info' }, '#show');
let hide: Button = new Button({ cssClass: 'e-info' }, '#hide');

document.getElementById('show').onclick = () => {
    grid.showColumns('CustomerID', 'field'); //show by field
};

document.getElementById('hide').onclick = () => {
    grid.hideColumns('CustomerID', 'field'); //hide by field
};



