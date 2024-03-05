import { Grid } from '@syncfusion/ej2-grids';
import { complexData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: complexData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'Names.0.FirstName', headerText: 'First Name', width: 120 },
        { field: 'Names.0.LastName', headerText: 'Last Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');