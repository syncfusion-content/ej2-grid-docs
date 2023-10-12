var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 100,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      format: 'yMd',
    },
    { field: 'Freight', headerText: 'Freight', width: 120 }
  ],

  height: 280,
});
grid.appendTo('#Grid');

button = new ej.buttons.Button({
  content: 'Refresh Header',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  const column = grid.getColumnByIndex(1);
  column.headerText = 'New Header Text'; // update the header text of the column object
  grid.refreshHeader();
};
