import { Grid,Page,Selection,RowSelectingEventArgs,RowSelectEventArgs,RowDeselectEventArgs,RowDeselectingEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page,Selection);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  allowSelection: true,
  enableHover: false,
  rowSelected: rowSelected,
  rowSelecting: rowSelecting,
  rowDeselected: rowDeselected,
  rowDeselecting: rowDeselecting,
  selectionSettings: { mode: 'Row',  type: 'Multiple'  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
    { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
  ],
  height: 315,
});
grid.appendTo('#Grid');

let message = document.getElementById('message');

(message as HTMLElement).textContent=''  

function rowSelecting(args: RowSelectingEventArgs)
{
  if (args.data.CustomerID == 'VINET')
  {
    (message as HTMLElement).textContent = `Trigger rowSelecting`;
    args.cancel = true;
  }
  else
  (message as HTMLElement).textContent=''  
}

function rowSelected(args: RowSelectEventArgs)
{
 
  if (args.data.Freight > '10' || args.data.Freight <= '140')
  {
    (message as HTMLElement).textContent = ` Trigger rowSelected`;
    args.row.style.backgroundColor = 'rgb(96, 158, 101)'; 
  }
  else
  (message as HTMLElement).textContent=''  
}

function rowDeselected(args:  RowDeselectEventArgs)
{
  if (args.data.Freight <= '10')
  {
    (message as HTMLElement).textContent = `Trigger rowDeselected`;
    args.row.style.backgroundColor = 'red';
  }
  else
  (message as HTMLElement).textContent=''  
}

function rowDeselecting(args: RowDeselectingEventArgs)
{
    if (args.data.Freight > '140')
    {
      (message as HTMLElement).textContent = `Trigger rowDeselecting`;
      args.row.style.backgroundColor = 'yellow';
    }
    else
    (message as HTMLElement).textContent=''  
}