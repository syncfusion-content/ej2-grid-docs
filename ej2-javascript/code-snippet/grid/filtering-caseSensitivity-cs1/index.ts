import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from 'datasource.ts';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings : { enableCaseSensitivity: false },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 90 },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120 },
        { field: 'ShipRegion', headerText: 'Ship Region', textAlign: 'Right', width: 120 }
    ],
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: onToggleCaseSensitive,
});
toggle.appendTo('#switch');

function onToggleCaseSensitive(args: ChangeEventArgs) {
    grid.filterSettings.enableCaseSensitivity = args.checked;
}