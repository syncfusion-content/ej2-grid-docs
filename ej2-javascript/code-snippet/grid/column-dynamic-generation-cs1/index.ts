import { Grid, Page,RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging:true,
    columns: [
        { field: 'S.No', headerText: 'S.No', textAlign: 'Center', width: 120 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100 ,format:'C2'},
        { field: 'OrderDate', headerText: 'OrderDate', width: 100, format:'yMd'}
    ],
    pageSettings: { pageSize: 8 },
  rowDataBound: (args: RowDataBoundEventArgs) => {
    var rowIndex: number = parseInt(args.row.getAttribute('aria-rowIndex'));
    var currentPageNumber: number = grid.pageSettings.currentPage;
    var pageSize: number = grid.pageSettings.pageSize;
    debugger;
    var startIndex: number = (currentPageNumber - 1) * pageSize;
    args.row.querySelector('.e-rowcell').innerHTML = (
      startIndex + rowIndex
    ).toString();
  },
});
grid.appendTo('#Grid');



