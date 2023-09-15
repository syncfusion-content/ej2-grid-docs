
var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
    { field: 'CustomerID', headerText: 'Customer ID', width: 140, textAlign: 'Right' },
    {field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd',textAlign: 'Right'
    },
    { field: 'Freight', headerText: 'Freight', width: 140, textAlign: 'Right' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 140, format: 'yMd', textAlign: 'Right' },
  ]
});
grid.appendTo('#Grid');
