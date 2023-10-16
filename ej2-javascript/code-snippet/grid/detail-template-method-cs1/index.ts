import { Grid, DetailRow } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { employeeData } from './datasource.ts';
import { TextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(DetailRow);

let grid: Grid = new Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'LastName', headerText: 'Last Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    height: 260
});
grid.appendTo('#Grid');

let expandBtn: Button = new Button();
expandBtn.appendTo('#expand');

let textbox: TextBox = new TextBox({
    placeholder: 'Enter the Row Index',
    floatLabelType: 'Auto',
    width: 250
});
textbox.appendTo('#rowindex');

(document.getElementById('expand')as HTMLElement).addEventListener('click', () => {
    grid.detailRowModule.expand(textbox.value); 
});