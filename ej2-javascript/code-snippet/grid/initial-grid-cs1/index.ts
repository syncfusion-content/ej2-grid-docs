import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    enablePersistence: true,
    allowFiltering: true,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 230
});
grid.appendTo('#Grid');

let restoreButton: Button = new Button({ cssClass: 'e-primary'});
restoreButton.appendTo('#restore');

(document.getElementById('restore')as HTMLElement).onclick = () => {
    grid.enablePersistence = false;
    window.localStorage.setItem("gridOrderDetails", ""); // Here grid is control name and OrderDetails is control ID
    grid.destroy();
    location.reload();
};