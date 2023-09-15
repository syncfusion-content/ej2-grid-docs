var grid = new ej.grids.Grid({
  dataSource: data,
  dataBound: dataBound,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right',
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
    { field: 'Freight', headerText: 'Freight', width: 120 },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 140,
      format: 'yMd',
      textAlign: 'Right',
    },
  ],
});
grid.appendTo('#Grid');

function dataBound() {
  grid.getColumnHeaderByIndex(0).style.color = '#0d0b0b';
  grid.getColumnHeaderByField('CustomerID').style.background = '#f45ddeab';
  grid.getColumnHeaderByField('CustomerID').style.color = '#0d0b0b';
  const columnIndex = grid.getColumnIndexByField('ShipCountry');
  grid.getColumnHeaderByIndex(columnIndex).style.color = '#0d0b0b';
}
