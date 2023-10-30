import { Grid,Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: {  type: 'Multiple', mode: 'Row'   },
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

(document.getElementById('selectRows1') as HTMLElement).addEventListener('click', function () {
  selectRows([1,3]);
});

(document.getElementById('selectRows2')as HTMLElement).addEventListener('click', function () {
  selectRows([0,2]);
});

(document.getElementById('selectRows3')as HTMLElement).addEventListener('click', function () {
  selectRows([2,4]);
});

(document.getElementById('selectRows4')as HTMLElement).addEventListener('click', function () {
  selectRows([0,5]);
});

(document.getElementById('selectRows5')as HTMLElement).addEventListener('click', function () {
  selectRows([1,6]);
});

(document.getElementById('selectRows6')as HTMLElement).addEventListener('click', function () {
  selectRows([0,7,8]);
});

(document.getElementById('selectRows7')as HTMLElement).addEventListener('click', function () {
  selectRows([1,9,10]);
});

(document.getElementById('selectRows8')as HTMLElement).addEventListener('click', function () {
  selectRows([4,7,12]);
});

(document.getElementById('selectRows9')as HTMLElement).addEventListener('click', function () {
  selectRows([2,5,6]);
});

function selectRows(rows: number[]) {
  grid.selectionModule.clearColumnSelection();
  grid.selectionModule.selectRows(rows);
}