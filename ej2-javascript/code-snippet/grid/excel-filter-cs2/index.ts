

import { Grid, Filter, Page, FilterSearchBeginEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    actionBegin: actionBegin,
    allowFiltering: true,
    filterSettings: { type:'Excel' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ProductName', headerText: 'Product Name', width: 110 },
        { field: 'Quantity', headerText: 'Quantity', width: 110 }
    ],
    height: 273
});
grid.appendTo('#Grid');

function actionBegin(args: FilterSearchBeginEventArgs) {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
    }
}