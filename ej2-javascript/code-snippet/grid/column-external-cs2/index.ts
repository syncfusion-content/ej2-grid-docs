import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple', allowColumnSelection: true },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
      { field: 'Freight', headerText: 'Freight', width: 100, format:'C2', textAlign: 'Right' },
      { field: 'OrderDate', headerText: 'Order Date', width: 100, format:'yMd', textAlign: 'Right' },
      { field: 'ShipCity', headerText: 'Ship City', width: 100 },
      { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

  (document.getElementById('selectColumns1')as HTMLElement).addEventListener('click', function () {
    selectColumns([1, 2]);
  });
  
  (document.getElementById('selectColumns2')as HTMLElement).addEventListener('click', function () {
    selectColumns([0, 2]);
  });
  
  (document.getElementById('selectColumns3')as HTMLElement).addEventListener('click', function () {
    selectColumns([1, 3]);
  });
  
  (document.getElementById('selectColumns4')as HTMLElement).addEventListener('click', function () {
    selectColumns([0, 5]);
  });
  
  (document.getElementById('selectColumns5')as HTMLElement).addEventListener('click', function () {
    selectColumns([1, 6]);
  });
  
  (document.getElementById('selectColumns6')as HTMLElement).addEventListener('click', function () {
    selectColumns([0, 2, 5]);
  });
  
  (document.getElementById('selectColumns7')as HTMLElement).addEventListener('click', function () {
    selectColumns([1, 3, 6]);
  });
  
  (document.getElementById('selectColumns8')as HTMLElement).addEventListener('click', function () {
    selectColumns([2, 4, 6]);
  });
  
  (document.getElementById('selectColumns9')as HTMLElement).addEventListener('click', function () {
    selectColumns([0, 3, 5]);
  });

  function selectColumns(columns) {
    grid.selectionModule.clearColumnSelection();
    grid.selectionModule.selectColumns(columns);
  }