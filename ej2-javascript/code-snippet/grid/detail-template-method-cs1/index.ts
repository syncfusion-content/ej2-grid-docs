

import { Grid, DetailRow } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { employeeData } from './datasource.ts';

Grid.Inject(DetailRow);

let expandBtn: Button = new Button();
expandBtn.appendTo('#expand');

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

document.getElementById('expand').addEventListener('click', () => {
    let inputElem: HTMLInputElement = (document.getElementsByClassName('rowindex')[0] as HTMLInputElement);
    let rowIndex: number = parseInt(inputElem.value, 10);
    grid.detailRowModule.expand(rowIndex);
});



