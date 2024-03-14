import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let filterParams = { params: { showSpinButton: false } };
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', filter: filterParams, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Name' },
        { field: 'ShipName', headerText: 'Ship Name' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2' }
    ],
});     
grid.appendTo('#Grid');