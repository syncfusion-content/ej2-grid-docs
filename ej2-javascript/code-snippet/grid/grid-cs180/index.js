var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  selectionSettings: { mode: 'Both', allowColumnSelection: true, type: 'Multiple' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
    { field: 'Freight', headerText: 'Freight',format: 'C2', width: 100 }
  ],
  height: 315
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button({
  content: 'Clear Selection'
})
button.appendTo('#clear')

document.getElementById('clear').onclick = () => {
  grid.clearSelection();
}