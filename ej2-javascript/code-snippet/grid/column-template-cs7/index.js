var grid = new ej.grids.Grid({
  dataSource: employeeData,
  enableHover: false,
  queryCellInfo: chipList,
  columns: [
    { field: 'LastName', headerText: 'Last Name', textAlign: 'Right', width: 90},
    { field: 'City',headerText: 'City', width: 150},
    { field: 'FirstName', headerText: 'First Name', textAlign: 'Left', template: '#columnTemplate',width: 90},
  ],
  height: 315,
});

grid.appendTo('#Grid');

function chipList(args) {
  if (args.column.field === 'FirstName') {

    var chips = new ej.buttons.ChipList({
      text: args.data[args.column.field],
    });

    chips.appendTo(args.cell.querySelector('#chip'));
  }
}