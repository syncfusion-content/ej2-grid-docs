import { Button } from '@syncfusion/ej2-buttons';
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

let button: Button = new Button({
    content: 'Grid is Addable',
  });
  button.appendTo('#Add');
  
  (document.getElementById('Add') as HTMLElement).onclick = () => {
    console.log(button);
    button.content == 'Grid is Addable'
      ? (button.content = 'Grid is Not Addable')
      : (button.content = 'Grid is Addable');
    isAddable = !isAddable;
  };