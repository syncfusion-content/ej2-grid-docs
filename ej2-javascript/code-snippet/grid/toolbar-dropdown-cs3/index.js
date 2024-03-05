var dropdowndata = [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }];

ej.grids.Grid.Inject(ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbarTemplate: '#toolbar-template',
    editSettings: { allowDeleting: true, allowAdding: true, allowEditing: true },
  
    columns: [
      { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
      { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 200,
  });
  grid.appendTo('#Grid');
  
  var dropDown= new ej.dropdowns.DropDownList({
    dataSource: dropdowndata,
    change: onChange,
    placeholder: 'select a value',
    width: 180
  });
  dropDown.appendTo('#dropdownelement');
  
  function onChange(args) {
  var selectedRow = grid.getSelectedRecords()[0];

  if (args.itemData.text === 'Update') {
    grid.endEdit();
  }
  if (args.itemData.text === 'Edit') {
    grid.startEdit();
  }
  if (args.itemData.text === 'Delete') {
    grid.deleteRecord(selectedRow);
  }
  dropDown.value = '';
  dropDown.placeholder = args.itemData.text;
}