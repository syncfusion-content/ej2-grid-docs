import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format:'C2', width: 90 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let addColumns: Button = new Button({ cssClass: 'e-info' }, '#add');
let deleteColumns: Button = new Button({ cssClass: 'e-info' }, '#delete');

(document.getElementById('add') as HTMLElement).onclick = () => {
    let newColumns = [
        { field: 'EmployeeID', headerText: 'EmployeeID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
    ];
    newColumns.forEach(function (col) {
        grid.columns.push(col);
    });
    grid.refreshColumns(); 
};

(document.getElementById('delete') as HTMLElement).onclick = () => {
    grid.columns.pop();
    grid.refreshColumns(); 
};



