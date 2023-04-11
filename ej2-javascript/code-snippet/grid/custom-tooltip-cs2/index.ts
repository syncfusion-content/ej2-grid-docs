

import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Tooltip } from '@syncfusion/ej2-popups';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    queryCellInfo: tooltip,
    height: 315
});
grid.appendTo('#Grid');

function tooltip(args: QueryCellInfoEventArgs): void { // event triggers on every cell render.
    let tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString() // add Essential JS2 tooltip for every cell.
    }, <HTMLElement>args.cell);
}



