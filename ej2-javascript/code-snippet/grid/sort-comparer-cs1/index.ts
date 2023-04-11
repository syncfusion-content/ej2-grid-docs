

import { Grid, Sort, Page, SortEventArgs  } from '@syncfusion/ej2-grids';
import { OrderData } from './datasource.ts';

Grid.Inject(Sort, Page);
let grid: Grid = new Grid({
    dataSource: OrderData,
    allowSorting: true,
    actionBegin: actionBegin,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', sortComparer: sortComparer, width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265
});

let action: string;
function actionBegin(args: SortEventArgs) {
        if (args.requestType === 'sorting') {
            action = args.direction;
        }
}

function sortComparer(reference, comparer) {
        const sortAsc = action === 'Ascending' ? true : false;
        if (sortAsc && reference === null) {
            return 1;
        } else if (sortAsc && comparer === null) {
            return -1;
        } else if (!sortAsc && reference === null) {
            return -1;
        } else if (!sortAsc && comparer === null) {
            return 1;
        } else {
            return reference - comparer;
        }
}
grid.appendTo('#Grid');


