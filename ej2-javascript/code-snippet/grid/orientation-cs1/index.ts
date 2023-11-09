import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';


let customAttributes = { class: 'orientationcss' };
let grid: Grid = new Grid({
  dataSource: data,
  created: setHeaderHeight,
  height: 200,

  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 100 },
    { field: 'CustomerID', headerText: 'Customer Name', width: 120},
    { field: 'Freight', width: 80,customAttributes: customAttributes, format: 'C2',textAlign: 'Center'},
    { field: 'ShipCity', headerText: 'Order Date', width: 100, format: 'yMd' },
  ]
});
customAttributes = { class: 'orientationcss' };
grid.appendTo('#Grid');
function setHeaderHeight() {
  let textWidth = (<HTMLElement>document.querySelector('.orientationcss > div')).scrollWidth;
//Obtain the width of the headerText content.
  let headerCell = document.querySelectorAll('.e-headercell');
  for(let i = 0; i < headerCell.length; i++) {
      (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
  }
}