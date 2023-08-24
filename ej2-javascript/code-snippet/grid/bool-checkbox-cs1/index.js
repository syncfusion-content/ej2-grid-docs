var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2',
      width: 100 },
    { field: 'Verified', headerText: 'Verified', displayAsCheckBox: true, width: 150 },
  ],
  height: 315
});
grid.appendTo('#Grid');


