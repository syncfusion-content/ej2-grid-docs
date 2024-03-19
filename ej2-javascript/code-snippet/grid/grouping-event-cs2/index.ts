import { Grid, Filter, ActionEventArgs, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    enablePersistence: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    actionBegin: actionBegin,
    height: 230
});
grid.appendTo('#Grid');

function actionBegin(args: ActionEventArgs) {
    grid.query.addParams('dataSource', 'data');
}