import { Grid, ForeignKey } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(ForeignKey);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'Employee.EmployeeID', headerText: 'Employee Name', width: 120, foreignKeyValue: 'FirstName', foreignKeyField: 'EmployeeID', dataSource: employeeData },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 130 }
    ],
    height: 315
});
grid.appendTo('#Grid');