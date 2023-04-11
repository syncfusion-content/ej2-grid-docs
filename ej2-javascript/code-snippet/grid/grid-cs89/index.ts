

import { Grid, DetailRow, AddEventArgs, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { employeeData } from './employeeData.ts';

Grid.Inject(DetailRow, Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 120 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', allowEditing:false, width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
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
    }
}



