import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
    ]
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: toggleStickyHeader,
  });
toggle.appendTo('#switch');

function toggleStickyHeader(args: ChangeEventArgs)
{
    grid.enableStickyHeader = args.checked;
}