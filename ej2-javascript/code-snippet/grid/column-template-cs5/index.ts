
import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { ColorPicker, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
import { employeeData } from './datasource';

let grid: Grid = new Grid({
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

function queryCellInfo(args: QueryCellInfoEventArgs) {
  if (args.column.headerText === 'Change the color of row') {
    let colorPicker: ColorPicker = new ColorPicker({
      // To set color value.
      mode: 'Palette',
      change: change,
    });
    colorPicker.appendTo(args.cell.querySelector('input'));
  }
}

function change(args:  ColorPickerEventArgs) {
  let selectedRows = grid.getSelectedRows(); // Adjust the selector based on your grid structur
  selectedRows.forEach(function (row: HTMLElement) {
    row.style.backgroundColor = args.value;
  });
  grid.clearSelection();
}
