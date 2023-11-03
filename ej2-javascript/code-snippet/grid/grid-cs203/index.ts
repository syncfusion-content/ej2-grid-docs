
import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 135,   textAlign: 'Right' },
            { field: 'ShipName', width: 120,  textAlign: 'Right'}
        ],
    });
grid.appendTo('#Grid');

let textbox: TextBox = new TextBox({
    placeholder: 'Enter current page:',
    width: 140,
    });
    textbox.appendTo('#textboxvalue');

let button: Button = new Button({
    content: 'click button',
    });
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
    grid.pagerModule.goToPage(parseInt(textbox.value, 10));
}