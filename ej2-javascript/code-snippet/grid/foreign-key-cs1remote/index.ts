

import { Grid, ForeignKey } from '@syncfusion/ej2-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new ODataV4Adaptor
});

let employeeData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees/',
    adaptor: new ODataV4Adaptor
});

Grid.Inject(ForeignKey);

let grid: Grid = new Grid(
    {
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            {field: 'EmployeeID', headerText: 'Employee Name', width: 120, foreignKeyValue: 'FirstName', dataSource: employeeData},
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 80},
            { field: 'ShipCity', headerText: 'Ship City', width: 130 },
        ],
        height: 315
    });
grid.appendTo('#Grid');



