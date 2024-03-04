
import { Grid, Page, PageSettingsModel } from '@syncfusion/ej2-grids';
import { Switch } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90},
            { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
        ]
    });
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: toggleQueryString,
    checked: false
  });
toggle.appendTo('#switch');

function toggleQueryString()
{
    (grid.pageSettings as PageSettingsModel).enableQueryString = toggle.checked;
}