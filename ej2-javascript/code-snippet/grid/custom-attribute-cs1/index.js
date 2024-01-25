var grid = new ej.grids.Grid({
    dataSource: inventoryData,
    allowPaging: true,
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Content' },
    height: 400,
    columns: [
      { field: 'Inventor', headerText: 'Inventor Name', width: 180, textAlign: 'Right'},
      { field: 'NumberofPatentFamilies', headerText: 'Number of Patent Families', width: 180, textAlign: 'Right'},
      { field: 'Country', headerText: 'Country', width: 140},
      { field: 'Active', width: 120 },
      { field: 'Mainfieldsofinvention', headerText: 'Main Feilds Of Invention', width: 200},
    ],
    pageSettings: { pageCount: 5 }
  });
  grid.appendTo('#Grid');

  var dropdown = new ej.dropdowns.DropDownList({
    dataSource: [
      { text: 'Content', value: 'Content' },
      { text: 'Both', value: 'Both' }
    ],
    popupHeight: '240px',
    width: '120px',
    value: 'Content',
    change: valueChange,
  });
  dropdown.appendTo('#dropdownlist');

  function valueChange(args) {
    grid.textWrapSettings.wrapMode = args.value;
  }
  