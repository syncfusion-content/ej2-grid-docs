import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', width: 90 },
        { field: 'LastName', headerText: 'Last Name', width: 150 },
        { field: 'FirstName', headerText: 'First Name', width: 150, template: '#template' }
    ],
    height: 315
});
grid.appendTo('#Grid');