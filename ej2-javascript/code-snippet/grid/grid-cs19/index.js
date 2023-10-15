ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var isAddable = true;
var grid = new ej.grids.Grid({
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

button = new ej.buttons.Button({
  content: 'Grid is Addable',
});
button.appendTo('#Add');

document.getElementById('Add').onclick = () => {
  button.content == 'Grid is Addable'
    ? (button.content = 'Grid is Not Addable')
    : (button.content = 'Grid is Addable');
  isAddable = !isAddable;
};