import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { headerText: 'Employee Image', textAlign: 'Center', template: '#template', width: 150 },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'LastName', headerText: 'Last Name', width: 100 },
        { field: 'City', headerText: 'City', textAlign: 'Right', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');
