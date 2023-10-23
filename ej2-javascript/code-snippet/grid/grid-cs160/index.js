var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { type: 'checkbox', width:50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

var dropdownData = [
    { text: 'Default', value: 'Default' },
    { text: 'ResetOnRowClick', value: 'ResetOnRowClick' }
  ];
  
  var ddlObject = new ej.dropdowns.DropDownList({
    index:0,
    width: 150,
    dataSource: dropdownData,
    change: valueChange,
  });
  ddlObject.appendTo('#dropdown');
  
  function valueChange(args) {
    grid.selectionSettings.checkboxMode = args.value;
    
  }