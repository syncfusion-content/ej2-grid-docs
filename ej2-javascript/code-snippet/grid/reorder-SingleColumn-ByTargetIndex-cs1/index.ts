import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

let reorderSingleColumnByTargetIndex: Button = new Button({ cssClass: 'e-info' },'#reordersingle');
(document.getElementById('reordersingle') as HTMLElement).onclick = function () {
  grid.reorderColumnByTargetIndex('OrderID', 3); // move column with field name "OrderID" to index 3
};

let reorderMultipleColumnByTargetIndex: Button = new Button({ cssClass: 'e-info' },'#reordermultiple');
(document.getElementById('reordermultiple') as HTMLElement).onclick = function () {
  grid.reorderColumnByTargetIndex(['OrderID', 'CustomerID'], 3); // move columns with field name "OrderID" and "CustomerID" to index 3
};