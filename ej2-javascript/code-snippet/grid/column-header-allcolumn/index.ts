import { Button } from '@syncfusion/ej2-buttons';
import { Grid,Page, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  height: 280,

  columns: [
      { field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 100},
    { field: 'CustomerID', headerText: 'Customer ID', width: 120},
    { field: 'Freight', headerText: 'Freight', width: 120},
    { field: 'ShipCity', headerText: 'Ship City', format: 'yMd', width: 100},
  ],
  
});
grid.appendTo('#Grid');
let   headerTextMap = {
  'OrderID': 'Order ID',
  'CustomerID': 'Customer ID',
  'Freight': 'Freight Charge',
  'ShipCity': 'Ship To City',
}

var button: Button = new Button({
  content: 'Change Header Text',
  cssClass: "e-success",
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function ()
{
    grid.columns.forEach((column) => {
        column.headerText = headerTextMap[column.field];
    });
    grid.refreshHeader();
    
};
