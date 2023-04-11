

import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let isAddable: boolean = true;
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'Role', headerText: 'Role', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    actionBegin: actionBegin,
    height: 240
});
grid.appendTo('#Grid');

function actionBegin(args) {
  if (args.requestType == 'beginEdit') {
    if (args.rowData['Role'].toLowerCase() == 'employee') {
      args.cancel = true;
    }
  }
  if (args.requestType == 'delete') {
    if (args.data[0]['Role'].toLowerCase() == 'employee') {
      args.cancel = true;
    }
  }
  if (args.requestType == 'add') {
    if (!isAddable) {
      args.cancel = true;
    }
  }
}

var button = document.createElement('button');
button.innerText = 'Grid is Addable';
document.body.insertBefore(button, document.body.children[0])
button.addEventListener('click', btnClick.bind(this));

function btnClick(args) {
  args.target.innerText == 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
  isAddable = !isAddable;
}


