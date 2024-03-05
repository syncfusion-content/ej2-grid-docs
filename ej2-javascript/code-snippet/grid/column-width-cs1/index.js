var grid = new ej.grids.Grid({
    dataSource: data,
    width: 'auto',
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 'auto' },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 100 },
      { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: '30%' },
    ],
    height: 315
});
grid.appendTo('#Grid');