

import { Grid, CommandColumn, Edit } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

Grid.Inject(CommandColumn, Edit);

let grid: Grid = new Grid({
    dataSource: employeeData,
    editSettings: { allowEditing: true, allowDeleting: true },
    columns: [
        { field: 'EmployeeID', isPrimaryKey: 'true', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 },
        { headerText: 'Commands', width: 120, commands: [{ type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
            { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
            { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
            { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }]}
    ],
    height: 310
});
grid.appendTo('#Grid');



