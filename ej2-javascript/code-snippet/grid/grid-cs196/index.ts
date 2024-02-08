import { Grid,Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Page);

let grid: Grid = new Grid({
  dataSource: data,
  selectionSettings: {  type: 'Multiple', mode: 'Cell'   },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry',headerText: 'Ship Country',width: 130 },
    { field: 'Freight',headerText: 'Freight',format: 'C2', width: 100 }
  ],
  height: 315
});
grid.appendTo('#Grid');

let button1 = new Button({content: 'Select [1,3]'});
button1.appendTo('#selectcell1');
(document.getElementById('selectcell1')as HTMLElement).addEventListener('click', function () {
  selectCells(1,3);
});

let button2: Button = new Button({content: 'Select [2,2]'});
button2.appendTo('#selectcell2');
(document.getElementById('selectcell2')as HTMLElement).addEventListener('click', function () {
  selectCells(2,2);
});

let button3 = new Button({content: 'Select [0,0]'});
button3.appendTo('#selectcell3');
(document.getElementById('selectcell3')as HTMLElement).addEventListener('click', function () {
  selectCells(0,0);
});

let button4 = new Button({content: 'Select [4,2]'});
button4.appendTo('#selectcell4');
(document.getElementById('selectcell4')as HTMLElement).addEventListener('click', function () {
  selectCells(4,2);
});

let button5 = new Button({content: 'Select [5,1]'});
button5.appendTo('#selectcell5');
(document.getElementById('selectcell5')as HTMLElement).addEventListener('click', function () {
  selectCells(5,1);
});

let button6 = new Button({content: 'Select [3,3]'});
button6.appendTo('#selectcell6');
(document.getElementById('selectcell6')as HTMLElement).addEventListener('click', function () {
  selectCells(3,3);
});

let button7 = new Button({content: 'Select [0,3]'});
button7.appendTo('#selectcell7');
(document.getElementById('selectcell7')as HTMLElement).addEventListener('click', function () {
  selectCells(0,3);
});

let button8 = new Button({content: 'Select [8,1]'});
button8.appendTo('#selectcell8');
(document.getElementById('selectcell8')as HTMLElement).addEventListener('click', function () {
  selectCells(8,1);
});

let button9 = new Button({content: 'Select [8,2]'});
button9.appendTo('#selectcell9');
(document.getElementById('selectcell9')as HTMLElement).addEventListener('click', function () {
  selectCells(8,2);
});

function selectCells(rowIndex: number,columnIndex: number) {
  grid.selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex]  }]);
}