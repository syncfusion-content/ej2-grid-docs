

import { Grid, RecordClickEventArgs } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { closest } from '@syncfusion/ej2-base';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        {
            headerText: 'Employee Data', textAlign: 'Right',
            template: '#template', width: 150, isPrimaryKey: true
        },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 130 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 }
    ],
    height: 315,
    recordClick: (args: RecordClickEventArgs) => {
        if (args.target.classList.contains('empData')) {
            var rowObj = grid.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid')
            );
            console.log(rowObj);
        }
    }
});
grid.appendTo('#Grid');



