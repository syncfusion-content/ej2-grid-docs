import { Button } from '@syncfusion/ej2-buttons';
import { Grid, Edit, Toolbar, CellEditArgs, BeforeBatchAddArgs, BeforeBatchDeleteArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let isAddable: boolean = true;
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right',validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
      { field: 'Role', headerText: 'Role',validationRules: {required: true }, width: 120, },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',validationRules: { min:1, max:1000 }, width: 120, format: 'C2' },
      { field: 'ShipCountry', headerText: 'Ship Country',editType: 'dropdownedit', width: 150 }
    ],
    cellEdit: cellEdit,
    beforeBatchAdd: beforeBatchAdd,
    beforeBatchDelete: beforeBatchDelete,  
    height: 240
});
grid.appendTo('#Grid');

function cellEdit(args: CellEditArgs) {
  if (args.rowData['Role'] == 'Admin') {
    args.cancel = true;
  }
}
function beforeBatchAdd(args: BeforeBatchAddArgs) {
  if (!isAddable) {
    args.cancel = true;
  }
}
function beforeBatchDelete(args: BeforeBatchDeleteArgs) {
  if (args.rowData['Role'] == 'Admin') {
    args.cancel = true;
  }
}

let button: Button = new Button({
    content: 'Grid is Addable',
  });
button.appendTo('#Add');
  
(document.getElementById('Add') as HTMLElement).onclick = () => {
  button.content == 'Grid is Addable'? (button.content = 'Grid is Not Addable'): (button.content = 'Grid is Addable');
  isAddable = !isAddable;
};