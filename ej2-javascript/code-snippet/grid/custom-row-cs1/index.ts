import { Grid } from '@syncfusion/ej2-grids';
import { orderDetails } from './datasource.ts';
import { Button, ClickEventArgs } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: orderDetails,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
      ],
      rowHeight: 42,
      height: 280,
});
grid.appendTo('#Grid');

let smallHeightButton: Button = new Button({ cssClass: 'e-small' }, '#small');
let mediumHeightButton: Button = new Button({ cssClass: 'e-small' }, '#medium');
let bigHeightButton: Button = new Button({ cssClass: 'e-small' }, '#big');

(document.getElementById('changeHeight')as HTMLElement).onclick=function(args:ClickEventArgs)
{
 let heightRow={small: 20, medium: 40, big: 60};
  grid.rowHeight = (heightRow)[((args.target)as HTMLElement).id];
}