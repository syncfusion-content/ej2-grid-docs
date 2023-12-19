var grid = new ej.grids.Grid({
  dataSource: employeeData,
  enableHover: false,
  queryCellInfo: queryCellInfo,
  columns: [
    { field: 'FirstName', headerText: 'First Name', textAlign: 'Right', width: 90},
    { field: 'LastName', headerText: 'Last Name', width: 150 },
    { field: 'City', headerText: 'City', width: 150 },
    { headerText: 'Change the color of row', template: '#columnTemplate', width: 120},
  ],
  height: 315,
});
grid.appendTo('#Grid');

function queryCellInfo(args) {
  if (args.column.headerText === 'Change the color of row') {
    var colorPickerElement = new ej.inputs.ColorPicker({
      // To set color value.
      mode: 'Palette',
      change: change,
    });
    colorPickerElement.appendTo(args.cell.querySelector('#colorPicker'));
  }
}

function change(args) {
  var selectedRows = grid.getSelectedRows(); 
  selectedRows.forEach(function (row) {
    row.style.backgroundColor = args.value;
  });
  grid.clearSelection();
}
