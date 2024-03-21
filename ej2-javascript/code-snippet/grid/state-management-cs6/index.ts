import { Grid, Page, Column} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject( Page );

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    enablePersistence: true,
    height: 230,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

let addButton: Button = new Button();
addButton.appendTo('#add');

(document.getElementById('add')as HTMLElement).addEventListener('click', function () {
    let obj = { field: "Freight", headerText: 'Freight', width: 120 };
    (grid.columns as Column[]).push(obj as Column); // you can add the columns by using the Grid columns method
    grid.refreshColumns();
});