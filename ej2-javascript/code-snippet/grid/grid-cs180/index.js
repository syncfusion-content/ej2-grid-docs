var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  selectionSettings: { mode: 'Both', allowColumnSelection: true, type: 'Multiple'  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    { field: 'Freight', headerText: 'Freight', width: 150 }
],
height: 315
});
grid.appendTo('#Grid');

button = new ej.buttons.Button({
  content: 'Clear Selection'
  })
  button.appendTo('#clear')

  document.getElementById('clear').onclick = () => {
    grid.clearSelection();
  }