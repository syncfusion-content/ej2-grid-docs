import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple' },
    allowPaging: true,
    pageSettings: { pageSize: 8 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', type: 'number', textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 120 },
        { field: 'Freight', headerText: 'Freight', type: 'number', format: 'C2', textAlign: 'Right', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', type: 'string', width: 180 },
    ],
    height: 273
});
grid.appendTo('#Grid');