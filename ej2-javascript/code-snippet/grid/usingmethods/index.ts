

import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    dataBound: dataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 },
    ],
    height: 315
});
grid.appendTo('#Grid');

function dataBound() {
    var header = grid.getHeaderContent().querySelector('.e-headercell');
    header.style.backgroundColor = 'red';
    header.style.color = 'white';
    var cell = grid.getCellFromIndex(1, 2);
    cell.style.background = '#f9920b';
    cell.style.color = 'white';
}