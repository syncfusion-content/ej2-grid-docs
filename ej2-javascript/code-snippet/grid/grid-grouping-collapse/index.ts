import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group);

let initial = true;

let grid: Grid = new Grid({
    dataSource: data,
    dataBound: dataBound,
    allowGrouping: true,
    groupSettings: {columns: ['ShipCity']},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 267
});
grid.appendTo('#Grid');

function dataBound() {
    if (initial === true) {
        (grid.groupModule  as Group).collapseAll();
        initial = false;
    }
}