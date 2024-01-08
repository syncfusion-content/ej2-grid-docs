import { Grid, Resize,ResizeArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  resizeStart: resizeStart,
  resizing: resizing,
  resizeStop: resizeStop,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120},
    { field: 'ShipCity', headerText: 'Ship City', width: 120},
    { field: 'ShipName', headerText: 'Ship Name', width: 120},
    { field: 'ShipCountry', headerText: 'Ship Country', width: 120},
    { field: 'ShipAddress', headerText: 'Ship Address', width: 100 },
    { field: 'Freight',headerText: 'Freight', width: 80},
  ]
});
grid.appendTo('#Grid');

let message = document.getElementById('message');

function resizeStart(args: ResizeArgs)
{
  (message as HTMLElement).innerHTML = `resizeStart event triggered`;
    if (args.column.field === 'OrderID') {
        args.cancel = true;
    }
}

function resizing()
{
  (message as HTMLElement).innerHTML = `resizing event triggered`;
}

function resizeStop(args: ResizeArgs)
{
  (message as HTMLElement).innerHTML = `resizeStop event triggered`;
  let headerCell = grid.getColumnHeaderByField(args.column.field);
  headerCell.classList.add('customcss');
  let columnCells = grid.getContentTable().querySelectorAll(`[data-colindex="${args.column.index}"]`);
  for (let i = 0; i < columnCells.length; i++) {
      let cell = columnCells[i]as HTMLElement;
      cell.style.backgroundColor = 'rgb(43, 195, 226)';
  }

}