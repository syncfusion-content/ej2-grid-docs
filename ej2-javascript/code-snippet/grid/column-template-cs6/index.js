var grid = new ej.grids.Grid({
    dataSource: employeeData,
    enableHover: false,
    queryCellInfo: queryCellInfo,
    columns: [
      { field: 'LastName', headerText: 'Last Name', width: 90 },
      { field: 'City', headerText: 'City', width: 150 },
      { field: 'FirstName', headerText: 'First Name', template: '#columnTemplate', width: 90 },
    ],
    height: 315,
});
grid.appendTo('#Grid');

function queryCellInfo(args) {
  if (args.column.field === 'FirstName') {
    var chip = new ej.buttons.ChipList({
      text: args.data[args.column.field],
    });
    chip.appendTo(args.cell.querySelector('#chipElement'));
  }
}