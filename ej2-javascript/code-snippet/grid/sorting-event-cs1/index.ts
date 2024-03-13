import { Grid, Sort, SortEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Sort);

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315,
    actionBegin: actionBegin,
    actionComplete: actionComplete
});
grid.appendTo('#Grid');

function actionBegin(args:SortEventArgs) {
    if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
        args.cancel = true;
    }
}
function actionComplete(args:SortEventArgs) {
    (document.getElementById('message')as HTMLElement).innerText = args.requestType + ' action completed for ' +args.columnName + ' column';
}