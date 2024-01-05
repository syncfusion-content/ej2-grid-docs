import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { employeeData } from './data-source.ts';
import { Dialog } from '@syncfusion/ej2-popups';

let grid: Grid = new Grid({
  dataSource: employeeData,
  queryCellInfo: queryCellInfo,
  columns: [
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right',width: 90},
    { field: 'FirstName', headerText: 'Name', width: 120},
    { headerText: 'Employee Data', textAlign: 'Right', template: '#columnTemplate', width: 90},
  ],
  height: 315,
});
grid.appendTo('#Grid');

let dialogVisible =  false;

function queryCellInfo(args: QueryCellInfoEventArgs ) {

  if (args.column.headerText === 'Employee Data') {
    args.cell.querySelector('#button').addEventListener('click', () => {
      dialog.visible = true
      dialog.content =
        `<p><b>EmployeeID:</b> ${args.data.EmployeeID}</p>
        <p><b>FirstName:</b> ${args.data.FirstName}</p>
        <p><b>LastName:</b> ${args.data.LastName}</p>`
    })
  }
}

let dialog: Dialog = new Dialog({
  header: "Selected Row Details",
  content: "dialogContent",
  showCloseIcon: true,
  width: "400px",
  visible: dialogVisible,
  close: dialogClose,
})
dialog.appendTo('#dialog');

function dialogClose()
{
  dialogVisible = false;
}