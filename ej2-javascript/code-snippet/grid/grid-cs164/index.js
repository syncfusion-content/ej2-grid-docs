var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings: { type: 'Single' },
    columns: [
      {
        field: 'OrderID',
        headerText: 'Order ID',
        textAlign: 'Right',
        width: 120,
      },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 },
    ],
    height: 315,
  });
  grid.appendTo('#Grid');
  
  let dropdownData = [
    { text: 'Single', value: 'Single' },
    { text: 'Multiple', value: 'Multiple' },
  ];
  
  let ddlObject = new ej.dropdowns.DropDownList({
    value: 'Single',
    popupHeight: '240px',
    width: 100,
    dataSource: dropdownData,
    change: valueChange,
  });
  ddlObject.appendTo('#dropdown');
  
  function valueChange(args) {
    grid.selectionSettings.type = args.value;
  }
  