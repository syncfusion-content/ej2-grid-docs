import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        height: 325,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150}
    ]
    });
grid.appendTo('#Grid');

let textbox: TextBox = new TextBox({
    placeholder: 'Enter current page: ',
    width: 140
    });
    textbox.appendTo('#textboxvalue');

let button: Button = new Button({
    content: 'click button'
    });
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
    grid.pageSettings.currentPage = parseInt(textbox.value, 10); 
}