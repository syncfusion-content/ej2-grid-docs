import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page,Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowSelection: true,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID',isPrimaryKey: 'true', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130,format: "yMd", textAlign: 'Right' }
    ],
    height: 315
});
grid.appendTo('#Grid');

let message = document.getElementById('message');
let selectedRecordscount = 0;

let button: Button = new Button({
    content: 'Selected Records count',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
    selectedRecordscount = grid.getSelectedRecords().length;
    if (selectedRecordscount > 0) {
        (message as HTMLElement).textContent = `Selected record count: ${selectedRecordscount}`
    }
    else {
        (message as HTMLElement).textContent = ''
    }
};