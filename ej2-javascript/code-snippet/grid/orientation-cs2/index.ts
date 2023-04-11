

import { Grid, ActionEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Center', customAttributes: { class: 'orientationcss' }, width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    created: setHeaderHeight,
    height: 240
});
grid.appendTo('#Grid');

function setHeaderHeight(args: ActionEventArgs): void {
    let textWidth: number = document.querySelector(".orientationcss > div").scrollWidth; // obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for (let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; // assign the obtained textWidth as the height of the headerCell.
    }
}



