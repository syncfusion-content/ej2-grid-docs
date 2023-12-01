import { Grid } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.js';

let small: Button = new Button({ cssClass: 'e-small' });
small.appendTo('#small');

//small button click event handler
small.element.onclick = (): void => {
  (grid as any).rowHeight = 20;
};

let medium: Button = new Button({ cssClass: 'e-small' });
medium.appendTo('#medium');

//medium button click event handler
medium.element.onclick = (): void => {
  (grid as any).rowHeight = 40;
};

let big: Button = new Button({ cssClass: 'e-small' });
big.appendTo('#big');

//big button click event handler
big.element.onclick = (): void => {
  (grid as any).rowHeight = 60;
};

let data: Object = new DataManager(orderData as JSON[]).executeLocal(
  new Query().take(15)
);
let grid: Grid = new Grid({
  dataSource: data,
  rowHeight: 42,
  height: 400,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right',
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 130,
      format: 'yMd',
      textAlign: 'Right',
    },
    { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
  ],
});
grid.appendTo('#Grid');

