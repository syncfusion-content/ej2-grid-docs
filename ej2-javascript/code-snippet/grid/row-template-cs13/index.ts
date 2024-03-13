import { Grid, Resize,ResizeArgs,Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  enableHover: false,
  resizeStart: resizeStart,
  resizing: resizing,
  resizeStop: resizeStop,
  columns: [
    { field: 'OrderID', headerText: 'Order ID',textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120},
    { field: 'ShipCity', headerText: 'Ship City', width: 100},
    { field: 'ShipName', headerText: 'Ship Name', width: 80},
    { field: 'ShipCountry', headerText: 'Ship Country',textAlign: 'Right', width: 100},
    { field: 'ShipAddress', headerText: 'Ship Address', width: 120 },
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
  let headerCell = grid.getColumnHeaderByField((args.column as Column).field);
  headerCell.classList.add('customcss');
  let columnCells = grid.getContentTable().querySelectorAll(`[data-colindex="${args.column.index}"]`);
  for (let i = 0; i < columnCells.length; i++) {
      let cell = columnCells[i]as HTMLElement;
      cell.style.backgroundColor = 'rgb(43, 195, 226)';
  }

}