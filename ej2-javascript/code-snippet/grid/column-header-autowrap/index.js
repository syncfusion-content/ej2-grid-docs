var grid = new ej.grids.Grid({
    dataSource: data,
    gridLines: 'Default',
    allowTextWrap: true,
    textWrapSettings: { wrapMode: 'Header' },
    allowPaging: true,
  
    columns: [
      {
        field: 'Inventor',
        headerText: 'Inventor Name',
        width: 180,
        textAlign: 'Right',
      },
      {
        field: 'NumberofPatentFamilies',
        headerText: 'Number of Patent Families',
        width: 180,
      },
      {
        field: 'Country',
        headerText: 'Country',
        width: 140,
        textAlign: 'Right',
      },
      { field: 'Active', width: 120 },
      {
        field: 'Mainfieldsofinvention',
        headerText: 'Main Feilds Of Invention',
        width: 200,
      },
    ],
    pageSettings: { pageCount: 5 },
  });
  grid.appendTo('#Grid');
  var dropdown = new ej.dropdowns.DropDownList({
    dataSource: [
      { text: 'Header', value: 'Header' },
      { text: 'Both', value: 'Both' },
    ],
    popupHeight: '240px',
    width: '120px',
    value: 'Header',
    change: change,
  });
  dropdown.appendTo('#dropdownlist');
  function change(args) {
    grid.textWrapSettings.wrapMode = args.value;
  }

