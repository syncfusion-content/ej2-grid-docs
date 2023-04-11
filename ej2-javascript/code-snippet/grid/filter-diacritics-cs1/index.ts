

import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from 'datasource.ts';

Grid.Inject(Page, Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: { ignoreAccent: true },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 140 },
        { field: 'Name', headerText: 'Name', width: 170 },
        { field: 'ShipName', headerText: 'Ship Name', width: 170 },
        { field: 'CustomerID', headerText: 'Supplier Name', width: 140 }
    ],
    allowPaging: true,
});
grid.appendTo('#Grid');



