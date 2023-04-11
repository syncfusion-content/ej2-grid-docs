

import { Grid } from '@syncfusion/ej2-grids';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { data, RowDataBoundEventArgs } from './datasource.ts';

let gridData: Object = new DataManager(data).executeLocal(new Query().take(8));

let grid: Grid = new Grid({
    dataSource: gridData,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    rowDataBound: rowDataBound
});

function rowDataBound(args: RowDataBoundEventArgs) {
    if((args.data as OrderDetails).OrderID === 10249){
        args.rowHeight = 90;
    }
}

interface OrderDetails {
    OrderID ?: number;
}

grid.appendTo('#Grid');



