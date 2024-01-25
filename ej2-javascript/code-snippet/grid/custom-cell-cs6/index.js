var grid = new ej.grids.Grid({
    dataSource: inventoryData,
    height: 315,
    columns: [
        { field: 'Inventor', headerText: 'Name of the Inventor',width: 80  },
        { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: 100 },
        { field: 'Country', headerText: 'Country', width: 80 },
        { field: 'Number of INPADOC patents', headerText: 'Number of INPADOC patents',width: 100 },
        { field: 'MainFieldsofInvention', headerText: 'Main fields of invention',width: 100 }
    ]
  });
  grid.appendTo('#Grid');
  
  var dropdown = new ej.dropdowns.DropDownList({
    dataSource: [
      { text: 'Ellipsis', value: 'Ellipsis' },
      { text: 'Clip', value: 'Clip' },
      { text: 'EllipsisWithTooltip', value: 'EllipsisWithTooltip' }
    ],
    popupHeight: '240px',
    width: '150',
    value: 'Ellipsis',
    change: valueChange
  });
  dropdown.appendTo('#dropdownlist');
  
  function valueChange(args) {
    grid.getColumnByField('MainFieldsofInvention').clipMode = args.value;
    grid.refresh();
  }