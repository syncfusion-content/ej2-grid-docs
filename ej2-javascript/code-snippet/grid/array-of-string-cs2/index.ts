

import { Grid } from '@syncfusion/ej2-grids';
import { stringData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: stringData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'Name', headerText: 'Full Name', width: 120, valueAccessor: valueAccess },
        { field: 'Title', headerText: 'Title', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

function valueAccess(field: string, data: Object, column: Object): string {
    return data[field].map(function (s: {LastName: string, FirstName: string}): string {
        return s.LastName || s.FirstName }).join(' ');
}



