var grid = new ej.grids.Grid({

  dataSource: data,
  allowPaging: true,
  allowTextWrap: true,
  textWrapSettings: 'wrapSettings',
  height: 400,

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
      textAlign: "Right",
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
});
grid.appendTo('#Grid');

let wrapSettings = {wrapMode: 'Header' }

let dropdownData = [
  { text: 'Header', value: 'Header' },
  { text: 'Both', value: 'Both' },
]

var dropdown = new ej.dropdowns.DropDownList({
  dataSource: dropdownData,
  popupHeight: '240px',
  width: '100px',
  value: 'Header',
  change: valueChange,
});
dropdown.appendTo('#dropdownlist');

function valueChange(args) {
  grid.textWrapSettings.wrapMode = args.value;
}

