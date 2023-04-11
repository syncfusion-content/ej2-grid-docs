

import { Grid, DetailRow, DetailDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { employeeData } from './employeeData.ts';
import {DataManager,Query} from '@syncfusion/ej2-data';

Grid.Inject(DetailRow);
let orderData = data;
let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    childGrid: {
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 120 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right' width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    },
    height: 315,

    detailDataBound: (args: DetailDataBoundEventArgs) => {
        let empIdValue = args.childGrid.parentDetails.parentRowData.EmployeeID;
        let matchedData = new DataManager(orderData).executeLocal(
            new Query().where('EmployeeID', 'equal', empIdValue, true)
        );
        args.childGrid.query = new Query();
        args.childGrid.dataSource = matchedData;
        }
    });
grid.appendTo('#Grid');



