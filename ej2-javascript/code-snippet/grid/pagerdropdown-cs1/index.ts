import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';


let formatOptions = { type: 'date', format: 'dd/MM/yyyy' };
let shipFormat = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' };

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'OrderDate', format: formatOptions, headerText: 'Order Date', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', format: shipFormat, headerText: 'Ship Date', textAlign: 'Right', width: 150 }
    ],
    height:315,
});
grid.appendTo('#Grid');