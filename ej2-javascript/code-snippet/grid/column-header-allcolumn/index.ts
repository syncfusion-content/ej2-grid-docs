import { Button } from '@syncfusion/ej2-buttons';
import { Grid, ColumnModel } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  height: 280,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'Freight', headerText: 'Freight', width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', format: 'yMd', width: 100 },
  ],
});
grid.appendTo('#Grid');

let headerTextMap = {
  'OrderID': 'Order ID',
  'CustomerID': 'Customer ID',
  'Freight': 'Freight Charge',
  'ShipCity': 'Ship To City',
}

let button: Button = new Button({
  content: 'Change Header Text',
  cssClass: "e-success",
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  grid.columns.forEach((column: ColumnModel) => {
    column.headerText = headerTextMap[column.field];
  });
  grid.refreshHeader();
};