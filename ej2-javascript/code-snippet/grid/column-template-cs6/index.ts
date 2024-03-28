import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { ChipList } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
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
  
  function queryCellInfo(args: QueryCellInfoEventArgs ) {
    if (args.column.field === 'FirstName') {
      let chip: ChipList = new ChipList({
        text: args.data[args.column.field],
      });
      chip.appendTo(args.cell.querySelector('#chipElement'));
    }
  }