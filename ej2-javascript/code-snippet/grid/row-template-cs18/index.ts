

import { Grid } from '@syncfusion/ej2-grids';

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid: Grid = new Grid ({
    dataSource: data
});
grid.appendTo('#Grid');



