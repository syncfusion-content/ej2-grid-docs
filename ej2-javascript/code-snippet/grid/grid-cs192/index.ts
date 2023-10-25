import { Grid,Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
Grid.Inject(Page);
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
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150,textAlign: 'Right' },
    {
      field: 'ShipCountry',headerText: 'Ship Country',width: 150,textAlign: 'Right'
    },
    {
      field: 'Freight',headerText: 'Freight', width: 100, textAlign: 'Right',format: 'C2',
    }
  ],
  height: 315,
});
grid.appendTo('#Grid');

let message = document.getElementById('message');

(message as HTMLElement).textContent=''  

function rowSelected(args)
{
 
  if (args.data.Freight > '10' || args.data.Freight <= '140')
  {
    (message as HTMLElement).textContent = ` Trigger rowSelected`;
    args.row.style.backgroundColor = 'rgb(96, 158, 101)'; 
  }
  else
  (message as HTMLElement).textContent=''  
}

function rowSelecting(args)
{
  if (args.data.CustomerID == 'VINET')
  {
    (message as HTMLElement).textContent = `Trigger rowSelecting`;
    args.cancel = true;
  }
  else
  (message as HTMLElement).textContent=''  
}

function rowDeselected(args)
{
  if (args.data.Freight <= '10')
  {
    (message as HTMLElement).textContent = `Trigger rowDeselected`;
    args.row.style.backgroundColor = 'red';
  }
  else
  (message as HTMLElement).textContent=''  
}

function rowDeselecting(args)
{
    if (args.data.Freight > '140')
    {
      (message as HTMLElement).textContent = `Trigger rowDeselecting`;
      args.row.style.backgroundColor = 'yellow';
    }
    else
    (message as HTMLElement).textContent=''  
}