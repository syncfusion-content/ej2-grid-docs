import { Grid, KeyboardEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    keyPressed:keyPressed,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');

function keyPressed(args: KeyboardEventArgs)
{
    if (args.keyCode === 13) {
        // Prevent the default Enter key action
        args.cancel = true;
      }
}