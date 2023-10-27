import { Grid,Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: {  type: 'Multiple', mode: 'Cell'   },
    columns: [
      {
        field: 'OrderID',
        headerText: 'Order ID',
        textAlign: 'Right',
        width: 120,
      },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150,textAlign: 'Right' },
      {
        field: 'ShipCountry',headerText: 'Ship Country',width: 150,textAlign: 'Right'
      },
      {
        field: 'Freight',headerText: 'Freight', width: 100, textAlign: 'Right',format: 'C2',
      }
    ],
    height: 315
});
grid.appendTo('#Grid');

(document.getElementById('selectcell1') as HTMLElement).addEventListener('click', function () {
  selectCells(1,3);
});

(document.getElementById('selectcell2') as HTMLElement).addEventListener('click', function () {
  selectCells(2,2);
});

(document.getElementById('selectcell3')as HTMLElement).addEventListener('click', function () {
  selectCells(0,0);
});

(document.getElementById('selectcell4')as HTMLElement).addEventListener('click', function () {
  selectCells(4,2);
});

(document.getElementById('selectcell5')as HTMLElement).addEventListener('click', function () {
  selectCells(5,1);
});

(document.getElementById('selectcell6')as HTMLElement).addEventListener('click', function () {
  selectCells(3,3);
});

(document.getElementById('selectcell7')as HTMLElement).addEventListener('click', function () {
  selectCells(0,3);
});

(document.getElementById('selectcell8')as HTMLElement).addEventListener('click', function () {
  selectCells(8,1);
});

(document.getElementById('selectcell9')as HTMLElement).addEventListener('click', function () {
  selectCells(8,2);
});

function selectCells(rowIndex: number,columnIndex: number) {
  grid.selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex]  }]);
}