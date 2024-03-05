import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple', allowColumnSelection: true },
    pageSettings: { pageSize: 8 },
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

let button1: Button = new Button({content: 'Select [1, 2]'});
button1.appendTo('#selectColumns1');
(document.getElementById('selectColumns1')as HTMLElement).addEventListener('click', function () {
  selectColumns([1, 2]);
});
  
let button2: Button = new Button({content: 'Select [0, 2]'});
button2.appendTo('#selectColumns2');
(document.getElementById('selectColumns2')as HTMLElement).addEventListener('click', function () {
  selectColumns([0, 2]);
});

let button3: Button = new Button({content: 'Select [1, 3]'});
button3.appendTo('#selectColumns3');
(document.getElementById('selectColumns3')as HTMLElement).addEventListener('click', function () {
  selectColumns([1, 3]);
});

let button4: Button = new Button({content: 'Select [0, 5]'});
button4.appendTo('#selectColumns4');
(document.getElementById('selectColumns4')as HTMLElement).addEventListener('click', function () {
  selectColumns([0, 5]);
});
 
let button5: Button = new Button({content: 'Select [1, 6]'});
button5.appendTo('#selectColumns5');
(document.getElementById('selectColumns5')as HTMLElement).addEventListener('click', function () {
  selectColumns([1, 6]);
});
  
let button6: Button = new Button({content: 'Select [0, 2, 5]'});
button6.appendTo('#selectColumns6');
(document.getElementById('selectColumns6')as HTMLElement).addEventListener('click', function () {
  selectColumns([0, 2, 5]);
});
  
let button7: Button = new Button({content: 'Select [1, 3, 6]'});
button7.appendTo('#selectColumns7');
(document.getElementById('selectColumns7')as HTMLElement).addEventListener('click', function () {
  selectColumns([1, 3, 6]);
});

  let button8: Button = new Button({content: 'Select [2, 4, 6]'});
  button8.appendTo('#selectColumns8');
  (document.getElementById('selectColumns8')as HTMLElement).addEventListener('click', function () {
    selectColumns([2, 4, 6]);
  });

  let button9: Button = new Button({content: 'Select [0, 3, 5]'});
  button9.appendTo('#selectColumns9');
  (document.getElementById('selectColumns9')as HTMLElement).addEventListener('click', function () {
    selectColumns([0, 3, 5]);
  });

  function selectColumns(columns: number[]) {
    grid.selectionModule.clearColumnSelection();
    grid.selectionModule.selectColumns(columns);
  }