import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
      { field: 'RollNo', headerText: 'Roll No' },
      { field: 'Mark1', headerText: 'Mark 1' },
      { field: 'Mark2', headerText: 'Mark 2', format: 'N' },
      { field: 'Average', headerText: 'Average', format: 'N2' },
      { field: 'Percentage', headerText: 'Percentage of Marks', format: 'P' },
      { field: 'Fees', headerText: 'Fees', textAlign: 'Right', format: 'C' }
    ],
    height: 315
});
grid.appendTo('#Grid');