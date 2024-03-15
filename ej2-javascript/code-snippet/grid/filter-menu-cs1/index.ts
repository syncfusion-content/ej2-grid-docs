import { Grid, Filter, Page, ActionEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageCount: 5 },
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 180, type: 'datetime', format: 'M/d/y HH:mm', textAlign: 'Right' },
        { field: 'ShippedDate', headerText: 'Shipped Date', width: 180, type: 'datetime', format: 'M/d/y HH:mm', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    actionComplete: actionComplete
});     
grid.appendTo('#Grid');

function actionComplete(args: ActionEventArgs) {
    if (args.requestType === 'filterafteropen') {
        let columnObj = grid.getColumnByField(args.columnName);
        if (columnObj.type === 'datetime') {
            let dateObj = (document.getElementById('dateui-' + columnObj.uid)as Element)['ej2_instances'][0];
            dateObj.timeFormat = 'HH:mm';
        }
    }
}