var grid = new ej.grids.Grid({
    dataSource: employeeData,
    enableHover: false,
    queryCellInfo: colorPicker,
    columns: [
      { field: 'FirstName', headerText: 'First Name', textAlign: 'Right', width: 90 },
      { field: 'LastName', headerText: 'Last Name', width: 150 },
      { field: 'City', headerText: 'City', width: 150 },
      { headerText: 'Change the color of row', template: '#columnTemplate', width: 120 },
    ],
    height: 315,
});
grid.appendTo('#Grid');

function colorPicker(args) {
  var inputElement = args.cell.querySelector('input')
    var colorPickerObject = new ej.inputs.ColorPicker({
      type: 'color',
      mode: 'Palette',
      change: change,
    });
    colorPickerObject.appendTo(inputElement);
  }

function change(args) {
  var selectedRows = grid.getSelectedRows(); 
  for (var row of selectedRows) {
    row.style.backgroundColor = args.value ;
}
  grid.clearSelection();
}