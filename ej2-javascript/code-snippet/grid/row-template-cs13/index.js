ej.grids.Grid.Inject(ej.grids.Resize);

var grid = new ej.grids.Grid({
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

var message = document.getElementById('message');

function resizeStart(args)
{
  message.innerHTML = `resizeStart event triggered`;
    if (args.column.field === 'OrderID') {
        args.cancel = true;
    }
}

function resizing()
{
  message.innerHTML = `resizing event triggered`;
}

function resizeStop(args)
{
  message.innerHTML = `resizeStop event triggered`;
  var headerCell = grid.getColumnHeaderByField(args.column.field);
  headerCell.classList.add('customcss');
  var columnCells = grid.getContentTable().querySelectorAll(`[data-colindex="${args.column.index}"]`);
  for (var i = 0; i < columnCells.length; i++) {
      var cell = columnCells[i];
      cell.style.backgroundColor = 'rgb(43, 195, 226)';
  }

}