

import { Grid, DetailRow, DetailDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { employeeData, data } from './datasource.ts';

Grid.Inject(DetailRow);

let grid: Grid = new Grid({
    dataSource: employeeData.slice(2, 5),
    detailTemplate: '#detailtemplate',
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'LastName', headerText: 'Last Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    detailDataBound: (e: DetailDataBoundEventArgs) => {
        let detail = new Grid({
            dataSource: data.filter((item: Object) => item['EmployeeID'] === e.data['EmployeeID']).slice(0, 3),
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 110 },
                { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ]
        });
        detail.appendTo(<HTMLElement>e.detailElement.querySelector('.custom-grid'));
    }
});
grid.appendTo('#Grid');



