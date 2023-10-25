ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Selection);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  allowSelection: true,
  enableHover: false,
  rowSelected: rowSelected,
  rowSelecting: rowSelecting,
  rowDeselected: rowDeselected,
  rowDeselecting: rowDeselecting,
  pageOptions: { pageSize: 5 },
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

message.textContent=''  

function rowSelected(args)
{
 
  if (args.data.Freight > '10' || args.data.Freight <= '140')
  {
    message.textContent = ` Trigger rowSelected`;
    args.row.style.backgroundColor = 'rgb(96, 158, 101)'; 
  }
  else
    message.textContent=''  
}

function rowSelecting(args)
{
  if (args.data.CustomerID == 'VINET')
  {
    message.textContent = `Trigger rowSelecting`;
    args.cancel = true;
  }
  else
      message.textContent=''  
}

function rowDeselected(args)
{
  if (args.data.Freight <= '10')
  {
    message.textContent = `Trigger rowDeselected`;
    args.row.style.backgroundColor = 'red';
  }
  else
    message.textContent=''  
}

function rowDeselecting(args)
{
    if (args.data.Freight > '140')
    {
      message.textContent = `Trigger rowDeselecting`;
      args.row.style.backgroundColor = 'yellow';
    }
    else
      message.textContent=''  
}