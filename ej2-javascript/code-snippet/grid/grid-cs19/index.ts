

import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let isAddable: boolean = true;
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'Role', headerText: 'Role', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    cellEdit: cellEdit,
    beforeBatchAdd: beforeBatchAdd,
    beforeBatchDelete: beforeBatchDelete,  
    height: 240
});
grid.appendTo('#Grid');

function cellEdit(args) {
  if (args.rowData['Role'] == 'Employee') {
    args.cancel = true;
  }
}
function beforeBatchAdd(args) {
  if (!isAddable) {
    args.cancel = true;
  }
}
function beforeBatchDelete(args) {
  if (args.rowData['Role'] == 'Employee') {
    args.cancel = true;
  }
}

var button = document.createElement('button');
button.innerText = 'Grid is Addable';
document.body.insertBefore(button, document.body.children[0]);
button.addEventListener('click', btnClick.bind(this));

function btnClick(args) {
  args.target.innerText == 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
  isAddable = !isAddable;
}



