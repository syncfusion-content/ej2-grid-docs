import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource';

Grid.Inject(Page);

let grid: Grid = new Grid(
    {
        dataSource: data,
        height: 315,
        width: 400,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        ]
    });
grid.appendTo('#Grid');