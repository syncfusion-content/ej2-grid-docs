

import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'Freight', headerText: 'Freight', format:'C2', width: 120 },
        { field: 'OrderDate',format: {type:'date', format:'dd/MM/yyyy'}, headerText:'Order Date', width:150},
        { field: 'OrderDate', format:{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }, headerText: 'Ship Date', width: 180 }
    ],
});
grid.appendTo('#Grid');



