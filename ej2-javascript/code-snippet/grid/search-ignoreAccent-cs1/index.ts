import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { Switch } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar)

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
        { field: 'CategoryName', headerText: 'Category Name', width: 100 },
        { field: 'ProductName', headerText: 'Product Name', width: 130 },
        { field: 'QuantityPerUnit', headerText: 'Quantity Per Unit', textAlign: 'Right', width: 150 },
        { field: 'UnitsInStock', headerText: 'Units In Stock', textAlign: 'Right', width: 80 },
    ]
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: onSwitchChange,
});
toggle.appendTo('#switch');

function onSwitchChange(args) {
    if (args.checked) {
        grid.searchSettings.ignoreAccent = true;
    } else {
        grid.searchSettings.ignoreAccent = false;
    }
}