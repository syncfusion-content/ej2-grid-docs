import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { ColorPicker, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';

let grid: Grid = new Grid({
    dataSource: employeeData,
    enableHover: false,
    queryCellInfo: colorPicker,
    columns: [
      { field: 'FirstName', headerText: 'First Name', width: 100 },
      { field: 'LastName', headerText: 'Last Name', width: 100 },
      { field: 'City', headerText: 'City', width: 100 },
      { headerText: 'Change the color of row',textAlign:'Center', template: '#columnTemplate', width: 120 },
    ],
    height: 315,
});
grid.appendTo('#Grid');

function colorPicker(args: QueryCellInfoEventArgs) {
  let inputElement: HTMLSelectElement  = args.cell.querySelector('input')
    let colorPickerObject: ColorPicker = new ColorPicker({
      type: 'color',
      mode: 'Palette',
      change: change,
    });
    colorPickerObject.appendTo(inputElement);
}

function change(args: ColorPickerEventArgs) {
  let selectedRows = grid.getSelectedRows() as HTMLElement[]; 
  for (let row of selectedRows) {
    row.style.backgroundColor = args.value as string;
}
  grid.clearSelection();
}