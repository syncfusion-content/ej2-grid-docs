import { Grid, RowDD, Selection, Page, RowDragEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(RowDD, Selection, Page );

let grid: Grid = new Grid({
    dataSource: data,
    allowRowDragAndDrop: true,
    allowPaging: true,
    selectionSettings: { type: 'Multiple' },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
      { field: 'CustomerID', headerText: 'Customer ID', width: 130 },
      { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right' },
      { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
    ],
    rowDragStart: function (args: RowDragEventArgs) {
      (document.getElementById('message') as HTMLElement).innerText = `rowDragStart event triggered`;
      args.cancel = true;
    },
    rowDragStartHelper: function (args: RowDragEventArgs) {
      (document.getElementById('message') as HTMLElement).innerText = `rowDragStartHelper event triggered`;
      if (args.data[0].OrderID === 10248) {
        args.cancel = true;
      }
    },
    rowDrag: function (args: RowDragEventArgs) {
      (document.getElementById('message') as HTMLElement).innerText = `rowDrag event triggered`;
      args.rows.forEach((row) => {
        row.classList.add('drag-limit');
      });
    },
    rowDrop: function (args: RowDragEventArgs) {
      (document.getElementById('message') as HTMLElement).innerText = `rowDrop event triggered`;
      let value = [];
      for (let index = 0; index < args.rows.length; index++) {
        value.push(args.fromIndex + index);
      }
      grid.reorderRows(value, args.dropIndex);
    },
  });
grid.appendTo('#Grid');