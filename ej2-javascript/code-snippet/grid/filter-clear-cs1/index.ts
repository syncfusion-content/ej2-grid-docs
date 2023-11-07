import { Grid, Filter, Sort, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter, Sort, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 120 }
    ],
});
grid.appendTo('#Grid');

let clearButton: Button = new Button({ cssClass: 'e-primary' }, '#clearfilter');
(document.getElementById('clearfilter') as HTMLElement).onclick = function () {
    grid.clearFiltering(); //clear filtering for all columns
};