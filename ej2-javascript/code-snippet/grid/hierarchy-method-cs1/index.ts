

import { Grid, DetailRow } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data, employeeData } from './datasource.ts';

Grid.Inject(DetailRow);

let expandBtn: Button = new Button();
expandBtn.appendTo('#expandall');

let collapseBtn: Button = new Button();
collapseBtn.appendTo('#collapseall');

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    },
    height: 265
});
grid.appendTo('#Grid');

document.getElementById('expandall').addEventListener('click', () => {
    grid.detailRowModule.expandAll();
});
document.getElementById('collapseall').addEventListener('click', () => {
    grid.detailRowModule.collapseAll();
});



