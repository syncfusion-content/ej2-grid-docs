

import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
         { field: 'EmployeeID', headerText: 'Employee ID', width: 120, textAlign: 'Right', headerTemplate: '#employeetemplate' },
                { field: 'FirstName', headerText: 'First Name', width: 140 },
                {
                    field: 'BirthDate', headerText: 'Birth Date', width: 130, format: 'yMd',
                    textAlign: 'Right', headerTemplate: '#datetemplate'
                },
                { field: 'City', width: 120 },
                { field: 'Country', headerText: 'Country', width: 140, format: 'yMd', textAlign: 'Right' },
    ],
    height: 315
});
grid.appendTo('#Grid');



