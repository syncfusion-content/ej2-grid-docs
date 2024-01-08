import { Grid, ColumnSelectEventArgs, ColumnSelectingEventArgs, ColumnDeselectEventArgs, } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  columnSelected: columnSelected,
  columnSelecting: columnSelecting,
  columnDeselected: columnDeselected,
  columnDeselecting: columnDeselecting,
  selectionSettings: { allowColumnSelection: true },
  pageSettings: { pageSize: 8 },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
    { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2' }
  ],
  height: 315
});
grid.appendTo('#Grid');

let message = (document.getElementById('message') as HTMLElement);

function columnSelected(args: ColumnSelectEventArgs) {
  message.textContent = `Trigger columnSelected`;
  args.headerCell.style.backgroundColor = 'rgb(96, 158, 101)';
}

function columnSelecting(args: ColumnSelectingEventArgs) {
  message.textContent = `Trigger columnSelecting`;
  if (args.column.field == "CustomerID")
    args.cancel = true;
}

function columnDeselected(args: ColumnDeselectEventArgs) {
  message.textContent = `Trigger columnDeselected`;
  args.headerCell.style.backgroundColor = 'rgb(245, 69, 69)';
}

function columnDeselecting(args: ColumnDeselectEventArgs) {
  message.textContent = `Triggercolumn Deselecting`;
  if (args.column.field == "Freight")
    args.cancel = true;
}