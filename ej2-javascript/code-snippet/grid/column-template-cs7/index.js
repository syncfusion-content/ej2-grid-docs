var grid = new ej.grids.Grid({
    dataSource: employeeData,
    queryCellInfo: queryCellInfo,
    columns: [
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign:'Right', width: 130 },
      { field: 'FirstName', headerText: 'First Name', width: 120 },
      { field: 'Employee Data', headerText: 'Employee Data', textAlign:'Right', template: '#columnTemplate', width: 150, isPrimaryKey: true },
    ],
    height: 315,
});
grid.appendTo('#Grid');

function queryCellInfo(args) {
  if (args.column.headerText === 'Employee Data') {
    args.cell.querySelector('#button').addEventListener('click', (e) => {
      dialog.visible = true
      dialog.content =
        `<p><b>EmployeeID:</b> ${args.data.EmployeeID}</p>
         <p><b>FirstName:</b> ${args.data.FirstName}</p>
         <p><b>LastName:</b> ${args.data.LastName}</p>`
    })
  }
}

var dialogVisible = false;

var dialog = new ej.popups.Dialog({
  header: "Selected Row Details",
  content: "dialogContent",
  showCloseIcon: true,
  width: "400px",
  visible: dialogVisible
})
dialog.appendTo('#dialog');