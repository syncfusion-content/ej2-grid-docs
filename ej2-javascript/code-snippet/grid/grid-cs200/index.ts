
import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { Switch } from '@syncfusion/ej2-buttons';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        height: 325,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'Freight', headerText: 'Freight', width: 135, format: 'C2',  textAlign: 'Right' },
            { field: 'OrderDate',headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right'}
        ],
    });
grid.appendTo('#Grid');

let enableQuery = false;

let toggle: Switch = new Switch({
    change: toggleQueryString,
    checked: enableQuery
  });
toggle.appendTo('#switch');

function toggleQueryString(args)
{
    grid.pageSettings.enableQueryString = args.checked;
}