import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Switch } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: onSwitchChange,
    checked: false
});
toggle.appendTo('#switch');

function onSwitchChange() {
    grid.selectionSettings.allowColumnSelection = toggle.checked; 
}