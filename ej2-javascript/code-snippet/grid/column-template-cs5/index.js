var grid = new ej.grids.Grid({
    dataSource: employeeData,
    columns: [
      { field: 'FirstName', headerText: 'First Name', textAlign: 'Right', width: 90 },
      { field: 'LastName', headerText: 'Last Name', width: 150 },
      { field: 'City', headerText: 'City', width: 150 },
      { headerText: 'Change the color of row', template: '#columnTemplate', width: 120 }
    ],
    height: 315,
  });
  
  grid.appendTo('#Grid');
  
  var colorPicker = new ej.inputs.ColorPicker({
    type: "color",
    mode: 'Palette',
    change: change
  });
  colorPicker.appendTo('#element'); // Corrected the target element ID
  
  function change(args) {
    var selectedRows = grid.getSelectedRows(); // Adjust the selector based on your grid structure
    for (var row of selectedRows) {
      row.style.backgroundColor = args.currentValue; // Corrected the property name to 'currentValue'
    }
    grid.clearSelection();
  }