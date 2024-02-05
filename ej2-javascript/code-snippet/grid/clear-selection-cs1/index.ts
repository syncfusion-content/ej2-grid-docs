import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page,Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowSelection: true,
    selectedRowIndex: 2,
    selectionSettings: { mode: 'Row', type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right', format: 'C2' }
    ],
    height: 315,
});
grid.appendTo('#Grid');

let button: Button = new Button({
    content: 'Clear Row Selection',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
    grid.selectionModule.clearRowSelection()
};