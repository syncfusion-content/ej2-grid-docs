

import { Grid, CommandColumn, Edit, IRow, Column, CommandClickEventArgs } from '@syncfusion/ej2-grids';
import { closest } from '@syncfusion/ej2-base';
import { employeeData } from './datasource.ts';

Grid.Inject(CommandColumn, Edit);

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 },
        { headerText: 'Commands', width: 120, commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }]},
        ],
    commandClick: (args: CommandClickEventArgs) => {
        alert(JSON.stringify(args.rowData));
    },
    height: 315
});
grid.appendTo('#Grid');



