import { Grid,CellSelectEventArgs,CellSelectingEventArgs,CellDeselectEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  selectionSettings: { mode: 'Cell', type: 'Multiple' },
  cellSelected: cellSelected,
  cellSelecting: cellselecting,
  cellDeselected: cellDeselected,
  cellDeselecting: cellDeselecting,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
    { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 },
  ],
  height: 315
});
grid.appendTo('#Grid');

let message = document.getElementById('message');

(message as HTMLElement).textContent='';

function cellSelected(args: CellSelectEventArgs)
{
  (message as HTMLElement).textContent = ` Trigger cellSelected`;
  args.currentCell.style.backgroundColor = 'rgb(96, 158, 101)';
}

function cellselecting(args: CellSelectingEventArgs)
{
  (message as HTMLElement).textContent = `Trigger cellSelecting`;
  if (args.data.ShipCountry == 'France')
      args.cancel = true;
}

function cellDeselected(args: CellDeselectEventArgs)
{
  (message as HTMLElement).textContent = `Trigger cellDeselected`;
  args.cells[0].style.backgroundColor = 'rgb(245, 69, 69)';

}

function cellDeselecting(args: CellDeselectEventArgs)
{
  (message as HTMLElement).textContent = `Trigger cellDeselecting`;
  args.cells[0].style.color = 'rgb(253, 253, 253)';
}