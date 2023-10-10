

import { Grid, DetailRow, AddEventArgs, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { employeeData } from './employeeData.ts';

Grid.Inject(DetailRow, Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'LastName', headerText: 'LastName', width: 100 },
        { field: 'City', headerText: 'City', width: 120 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 90 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', allowEditing:false, width: 80 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 120 }
        ],
        actionBegin: actionBegin
    },
    height: 315
});
grid.appendTo('#Grid');

function actionBegin(args: AddEventArgs): void {
    if (args.requestType === "add") {
        // `parentKeyFieldValue` refers to the queryString field value of the parent record.
       args.data.EmployeeID = this.parentDetails.parentKeyFieldValue;
        // 'this' refers to the instance of the child grid.
    }
}



