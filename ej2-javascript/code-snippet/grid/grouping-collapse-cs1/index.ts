

import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCity'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 240
});
grid.appendTo('#Grid');

let collapse: Button = new Button({ cssClass: 'e-flat' }, '#collapse');

document.getElementById('collapse').addEventListener('click', () => {
    if (grid.getSelectedRowIndexes().length) {
        let currentTr: Element = grid.getRows()[grid.getSelectedRowIndexes()[0]];
        while (currentTr.classList && currentTr.classList.length) {
            currentTr = <Element>currentTr.previousSibling;
        }
        let collapseElement = currentTr.querySelector('.e-recordplusexpand');
        grid.groupModule.expandCollapseRows(collapseElement); //Pass the collapse row element.
    }
});



