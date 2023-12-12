import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 315
});
grid.appendTo('#Grid');

let reorderSingleColumnUsingFieldName: Button = new Button({ cssClass: 'e-info' }, '#reordersingle');
(document.getElementById('reordersingle') as HTMLElement).onclick = function () {
  grid.reorderColumns('ShipCity', 'OrderID');
};

let reorderMultipleColumnsUsingFieldName: Button = new Button({ cssClass: 'e-info' }, '#reordermultiple');
(document.getElementById('reordermultiple') as HTMLElement).onclick = function () {
  grid.reorderColumns(['ShipCity', 'ShipRegion', 'ShipName'], 'OrderID');
};