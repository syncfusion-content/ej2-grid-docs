import { Grid, Filter, Page, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Filter, Page);

let saveButton: Button = new Button();
saveButton.appendTo('#save');

(document.getElementById('save')as HTMLElement).addEventListener('click', function () {
  let persistedGridSettings = JSON.parse(grid.getPersistData());
  let gridColumns =  Object.assign([],(grid.getColumns()));

  persistedGridSettings.columns.forEach(function (persistedColumn: Column ) {
      let column = gridColumns.find(function (col: Column) { return col.field === persistedColumn.field; });
      if (column) {
          persistedColumn.headerText = 'Text Changed';
          persistedColumn.template = (column as Column).template;
          persistedColumn.headerTemplate = (column as Column).headerTemplate;
      }
  });
  window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
  grid.setProperties(persistedGridSettings);
  (document.getElementById('message')as HTMLElement).innerText = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
});

let restoreButton: Button  = new Button();
restoreButton.appendTo('#restore');

(document.getElementById('restore')as HTMLElement).addEventListener('click', function () {
    let savedSettings = window.localStorage.getItem('gridOrders1');
  if (savedSettings) {
      grid.setProperties(JSON.parse(savedSettings));
      (document.getElementById('message')as HTMLElement).innerText = 'Restored the headerText, template column, and headerTemplate';
  } else {
      (document.getElementById('message')as HTMLElement).innerText = 'No saved settings found.';
  }
});

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    enablePersistence: true,
    height: 210,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, headerTemplate: '<button>HeaderTemplate</button>' },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150, template: '#template' }
    ]
});
grid.appendTo('#Grid');