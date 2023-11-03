import { Grid, DetailRow, DetailDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { employeeData } from './employeeData.ts';
import { DataManager,Query } from '@syncfusion/ej2-data';

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
        columns: [
            { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 90 },
            { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 100 }
        ],
    },
    height: 315,

    detailDataBound: (args: DetailDataBoundEventArgs) => {
        let empIdValue = args.data['EmployeeID'];
        let childGridData = new DataManager(data).executeLocal(
            new Query().where('EmployeeID', 'equal', empIdValue, true)
        );
        args.childGrid.query = new Query();
        args.childGrid.dataSource = childGridData;
        }
    });
grid.appendTo('#Grid');



