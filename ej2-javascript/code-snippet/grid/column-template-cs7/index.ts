import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { employeeData } from './data-source.ts';
import { ChipList } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
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

function chipList(args: QueryCellInfoEventArgs) {
    if (args.column.field === 'FirstName') {
  
      let chips = new ChipList({
        text: args.data[args.column.field],
      });
  
      chips.appendTo(args.cell.querySelector('#chip') as HTMLElement);
    }
  }