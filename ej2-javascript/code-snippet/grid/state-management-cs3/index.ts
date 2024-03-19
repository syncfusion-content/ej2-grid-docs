import { Grid, Filter, Page, Group, Sort, Reorder} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';
import { enableVersionBasedPersistence } from '@syncfusion/ej2-base';

Grid.Inject(Filter, Page, Group, Sort, Reorder);

enableVersionBasedPersistence(true);

let button1: Button = new Button();
button1.appendTo('#Version1');

let button2: Button  = new Button({ content: 'Version 2' });
button2.appendTo('#Version2');

let button3: Button  = new Button({ content: 'Version 3' });
button3.appendTo('#Version3');

(document.getElementById('Version1')as HTMLElement).addEventListener('click', function () {
    clickHandler('v.1');
});

(document.getElementById('Version2')as HTMLElement).addEventListener('click', function () {
    clickHandler('v.2');
});

(document.getElementById('Version3')as HTMLElement).addEventListener('click', function () {
    clickHandler('v.3');
});

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  allowFiltering: true,
  allowSorting: true,
  allowReordering: true,
  allowGrouping: true,
  enablePersistence: true,
  ej2StatePersistenceVersion: 'v.0',
  height: 315,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
  ],
});
grid.appendTo('#Grid');

function clickHandler(version) {
  grid.ej2StatePersistenceVersion = version;
  let persistedGridSettings = window.localStorage.getItem('gridOrderDetails' + grid.ej2StatePersistenceVersion);
  if (persistedGridSettings) {
      grid.setProperties(JSON.parse(persistedGridSettings));
      (document.getElementById('message')as HTMLElement).innerText = 'Grid state restored to ' + version;
  } else {
      let gridData = grid.getPersistData();
      window.localStorage.setItem('gridOrderDetails' + grid.ej2StatePersistenceVersion, gridData);
  }
}