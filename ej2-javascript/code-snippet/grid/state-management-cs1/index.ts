import { Grid, Filter, Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter, Page);

let gridId = 'OrderDetails';
let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  allowFiltering: true,
  enablePersistence: true,
  element: gridId,
  height: 300,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
  ]
});
grid.appendTo('#Grid');

let restoreButton: Button = new Button({
  content: 'Restore to initial state',
});
restoreButton.appendTo('#restore');

(document.getElementById('restore')as HTMLElement).addEventListener('click', function () {
  gridId = 'OrderDetails' + Math.floor(Math.random() * 10);
  grid.element.id = gridId;
  location.reload();
});