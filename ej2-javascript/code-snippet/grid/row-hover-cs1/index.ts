import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 150 },
        { field: 'ShipName', headerText: 'ShipName', width: 150 }
    ]
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    checked: true,
    change: onSwitchChange,
});
toggle.appendTo('#switch');

function onSwitchChange(args: ChangeEventArgs) {
    grid.enableHover = args.checked
}