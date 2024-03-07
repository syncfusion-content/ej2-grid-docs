import { Grid } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    allowSelection: true,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let copyButton: Button = new Button({ cssClass: "e-outline"});
copyButton.appendTo('#copy');

(document.getElementById('copy')as HTMLElement).addEventListener('click', () => {
    grid.copy();
});

let copyHeaderButton: Button = new Button({ cssClass: "e-outline"});
copyHeaderButton.appendTo('#copyHeader');

(document.getElementById('copyHeader')as HTMLElement).addEventListener('click', () => {
    grid.copy(true);
});