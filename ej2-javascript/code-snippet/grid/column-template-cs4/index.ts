import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { Sparkline } from '@syncfusion/ej2-charts';

let grid: Grid = new Grid({
    dataSource: employeeData,
    created: renderGridSparkline,
    columns: [
        { field: 'EmployeeID',headerText: 'Employee ID',textAlign: 'Right',width: 90},
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { headerText: 'Employee Performance Rating', template: '#columnTemplate', width: 280 }

    ],
    height: 315,
});
grid.appendTo('#Grid');

let lineData = [
  [0, 6, -4, 1, -3, 2, 5],
  [5, -4, 6, 3, -1, 2, 0],
  [6, 4, 0, 3, -2, 5, 1],
  [4, -6, 3, 0, 1, -2, 5],
  [3, 5, -6, -4, 0, 1, 2],
  [1, -3, 4, -2, 5, 0, 6],
  [2, 4, 0, -3, 5, -6, 1],
  [5, 4, -6, 3, 1, -2, 0],
  [0, -6, 4, 1, -3, 2, 5],
  [6, 4, 0, -3, 2, -5, 1],
];
  
  function renderGridSparkline() {
    setTimeout(() => {
      let grid = document.getElementById('Grid') as HTMLElement; 
      let gridRows = grid.getElementsByClassName('e-row');
      let rowsLength = gridRows.length;
  
      for (let i = 1; i <= rowsLength; i++) {
        let line: Sparkline = new Sparkline({
          height: '50px',
          width: '90%',
          lineWidth: 2,
          valueType: 'Numeric',
          fill: '#3C78EF',
          dataSource: getSparkData('line', i)
        });
        line.appendTo('#spkline' + i);
      }
    }, 100);
  }
  
  function getSparkData(type: string,count: number) {
    return lineData[count] as number[];;
  }