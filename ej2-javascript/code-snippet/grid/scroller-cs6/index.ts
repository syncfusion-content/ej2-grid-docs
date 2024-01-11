import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data.slice(0, 2),
    height: 315,
    width: '100%',
    dataBound: dataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCounry', headerText: 'Ship Counry', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 150 }
    ]
});
grid.appendTo('#Grid');

function dataBound() {
    grid.hideScroll();
}  