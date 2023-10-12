var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  dataBound: dataBound,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right'
    },
    { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
    { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 150,
    },
  ],
  height: 315,
});
grid.appendTo('#Grid');

function dataBound() {
  grid.getColumnHeaderByIndex(0).style.color = '#0d0b0b';
  grid.getColumnHeaderByField('CustomerName').style.background = '#f45ddeab';
  grid.getColumnHeaderByField('CustomerName').style.color = '#0d0b0b';
  grid.getColumnHeaderByUid('grid-column2').style.background = '#f45ddeab';
  const columnIndex = grid.getColumnIndexByField('ShipCountry');
  grid.getColumnHeaderByIndex(columnIndex).style.color = '#0d0b0b';
  const index = grid.getColumnIndexByUid('grid-column2');
  grid.getColumnHeaderByIndex(index).style.color = '#0d0b0b';
}
