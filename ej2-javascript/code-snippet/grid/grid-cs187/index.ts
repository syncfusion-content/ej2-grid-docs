import { Grid,Page,Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Page,Selection);

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: {  type: 'Multiple', mode: 'Row'   },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'ShipCountry',headerText: 'Ship Country',width: 130 },
      { field: 'Freight',headerText: 'Freight',format: 'C2', width: 100}
    ],
    height: 315
});
grid.appendTo('#Grid');

let button1: Button = new Button({content: 'Select [1,3]'})
button1.appendTo('#selectRows1');
(document.getElementById('selectRows1') as HTMLElement).addEventListener('click', function () {
  selectRows([1,3]);
});

let button2: Button = new Button({content: 'Select [0,2]'})
button2.appendTo('#selectRows2');
(document.getElementById('selectRows2')as HTMLElement).addEventListener('click', function () {
  selectRows([0,2]);
});

let button3: Button = new Button({content: 'Select [2,4]'})
button3.appendTo('#selectRows3');
(document.getElementById('selectRows3')as HTMLElement).addEventListener('click', function () {
  selectRows([2,4]);
});

let button4: Button = new Button({content: 'Select [0,5]'})
button4.appendTo('#selectRows4');
(document.getElementById('selectRows4')as HTMLElement).addEventListener('click', function () {
  selectRows([0,5]);
});

let button5: Button = new Button({content: 'Select [1,6]'})
button5.appendTo('#selectRows5');
(document.getElementById('selectRows5')as HTMLElement).addEventListener('click', function () {
  selectRows([1,6]);
});

let button6: Button = new Button({content: 'Select [0,7,8]'})
button6.appendTo('#selectRows6');
(document.getElementById('selectRows6')as HTMLElement).addEventListener('click', function () {
  selectRows([0,7,8]);
});

let button7: Button = new Button({content: 'Select [1,9,10]'})
button7.appendTo('#selectRows7');
(document.getElementById('selectRows7')as HTMLElement).addEventListener('click', function () {
  selectRows([1,9,10]);
});

let button8: Button = new Button({content: 'Select [4,7,12]'})
button8.appendTo('#selectRows8');
(document.getElementById('selectRows8')as HTMLElement).addEventListener('click', function () {
  selectRows([4,7,12]);
});

let button9: Button = new Button({content: 'Select [2,5,6]'})
button9.appendTo('#selectRows9');
(document.getElementById('selectRows9')as HTMLElement).addEventListener('click', function () {
  selectRows([2,5,6]);
});

function selectRows(rows: number[]) {
  grid.selectionModule.clearColumnSelection();
  grid.selectionModule.selectRows(rows);
}