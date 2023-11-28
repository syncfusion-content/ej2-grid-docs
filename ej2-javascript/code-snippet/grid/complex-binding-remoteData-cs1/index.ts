import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor(),
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
});
let query: Query = new Query().expand('Employee');
let grid: Grid = new Grid({
    dataSource: data,
    query: query,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 },
        { field: 'Employee.City', headerText: 'City', width: 130 }
    ],
    height: 315
});
grid.appendTo('#Grid');