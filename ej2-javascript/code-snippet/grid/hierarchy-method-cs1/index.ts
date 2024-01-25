import { Grid, DetailRow } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data, employeeData } from './datasource.ts';

Grid.Inject(DetailRow);

let expandButton: Button = new Button();
expandButton.appendTo('#expandall');

let collapseButton: Button = new Button();
collapseButton.appendTo('#collapseall');

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
      { field: 'FirstName', headerText: 'First Name', width: 100 },
      { field: 'LastName', headerText: 'LastName', width: 100 },
      { field: 'City', headerText: 'City', width: 120 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 100 }
        ],
    },
    height: 265
});
grid.appendTo('#Grid');

(document.getElementById('expandall')as HTMLElement).addEventListener('click', () => {
    grid.detailRowModule.expandAll();
});
(document.getElementById('collapseall')as HTMLElement).addEventListener('click', () => {
    grid.detailRowModule.collapseAll();
});