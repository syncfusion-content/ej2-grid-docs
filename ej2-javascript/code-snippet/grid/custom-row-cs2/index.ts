import { Grid } from '@syncfusion/ej2-grids';
import { data, RowDataBoundEventArgs } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 }
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