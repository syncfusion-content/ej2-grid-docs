import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from 'datasource.ts';
import { Switch } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 90 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 120 }
    ],
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: onToggleCaseSensitive,
});
toggle.appendTo('#switch');

function onToggleCaseSensitive(args) {
    if (args.checked) {
        grid.filterSettings.enableCaseSensitivity = true;
    } else {
        grid.filterSettings.enableCaseSensitivity  = false;
    }
}