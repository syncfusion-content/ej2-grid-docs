import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { Dialog } from '@syncfusion/ej2-popups';

let grid: Grid = new Grid({
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

function queryCellInfo(args: QueryCellInfoEventArgs) {
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

let dialogVisible = false;

let dialog: Dialog = new Dialog({
  header: "Selected Row Details",
  content: "dialogContent",
  showCloseIcon: true,
  width: "400px",
  visible: dialogVisible
})
dialog.appendTo('#dialog');