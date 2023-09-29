

import { Grid, Search, Toolbar, QueryCellInfoEventArgs, SearchEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let key: string = '';
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
      { field: 'ShipCity', headerText: 'Ship City', width: 100 },
      { field: 'ShipCountry', headerText: 'ShipCountry', width: 100 },
      { field: 'ShipName', headerText: 'Ship Name', width: 120 },
    ],
    height: 400,
    actionBegin: (args: SearchEventArgs) => {
    if (args.requestType === 'searching') {
      key = args.searchString.toLowerCase();
    }
  },
  queryCellInfo: (args: QueryCellInfoEventArgs) => {
    if (key != '') {
      let cellContent: string = args.data[args.column.field];
      let parsedContent: string = cellContent.toString().toLowerCase();
      if (parsedContent.includes(key.toLowerCase())) {
        let i: number = 0;
        let searchStr: string = '';
        while (i < key.length) {
          let index: number = parsedContent.indexOf(key[i]);
          searchStr = searchStr + cellContent.toString()[index];
          i++;
        }
        args.cell.innerHTML = (args.cell as any).innerText.replaceAll(
          searchStr,
          "<span class='customcss'>" + searchStr + '</span>'
        );
      }
    }
  }
});
grid.appendTo('#Grid');



