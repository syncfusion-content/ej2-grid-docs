var dropdowndata = [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }];

ej.grids.Grid.Inject(ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbarTemplate: '#toolbar-template',
    editSettings: { allowDeleting: true, allowAdding: true, allowEditing: true },
  
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
      { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 200,
  });
  grid.appendTo('#Grid');
  
  var dropDownListObject = new ej.dropdowns.DropDownList({
    dataSource: dropdowndata,
    change: onChange,
    popupHeight: 200,
    placeholder: 'select a value',
  });
  dropDownListObject.appendTo('#dropdownelement');
  
  function onChange(args) {
    var selectedRow = grid.getSelectedRecords()[0];
  
    if (args.value === 'Update') {
      grid.endEdit();
      dropdownelement.value = '';
      dropdownelement.placeholder = args.itemData.text;
    }
    if (args.value === 'Edit') {
      grid.startEdit();
      dropdownelement.value = '';
      dropdownelement.placeholder = args.itemData.text;
    }
    if (args.value === 'Delete') {
      grid.deleteRecord(selectedRow);
      dropdownelement.value = '';
      dropdownelement.placeholder = args.itemData.text;
    }
  }