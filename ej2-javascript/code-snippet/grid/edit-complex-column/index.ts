import { Grid, Edit, Toolbar} from '@syncfusion/ej2-grids';
import { complexData } from './datasource.ts';

Grid.Inject(Edit,Toolbar);

let grid: Grid = new Grid({
    dataSource: complexData,
    editSettings: {   allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID' ,textAlign: 'Right', width: 120},
        { field: 'Name.FirstName', headerText: 'First Name', width: 200,editTemplate: function (props: Employee) {
                return '<input class="e-input" name="Name___FirstName" type="text" id="Name___FirstName" value="' + props.Name.FirstName + '" />';
            } },
        { field: 'Name.LastName', headerText: 'Last Name', width: 200,editTemplate: function (props: Employee) {
            return '<input class="e-input" type="text" name="Name___LastName" id="Name___LastName" value=" ' +props.Name.LastName+ '" />';}
          },
        { field: 'Title', headerText: 'Title', width: 150}
    ],
    height: 315
});
grid.appendTo('#Grid');

interface Employee {
    EmployeeID: number;
    Name: {
        FirstName: string;
        LastName: string;
    };
    Title: string;
}