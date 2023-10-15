import { Grid, DetailRow } from '@syncfusion/ej2-grids';
import { data } from './childdata.ts';
import { employeeData } from './employeeData.ts';

Grid.Inject(DetailRow);

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
        queryString: 'ID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 100 }
        ],
        load: onLoad,
    },
    height: 315
});
grid.appendTo('#Grid');

function onLoad(): void {
  this.parentDetails.parentKeyFieldValue = this.parentDetails.parentRowData['EmployeeID'];
}