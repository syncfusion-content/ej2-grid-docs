

import { Grid, Sort, SortEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Sort);

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315,
    actionBegin: actionHandler,
    actionComplete: actionHandler
});
grid.appendTo('#Grid');

function actionHandler(args: SortEventArgs) {
    alert(args.requestType + ' ' + args.type); //custom Action
}



