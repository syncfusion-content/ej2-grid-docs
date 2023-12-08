
import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 },
        { field: 'LastName', headerText: 'Last Name', width: 150 },
        { field: 'FirstName', headerText: 'First Name', template: '#template', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');
