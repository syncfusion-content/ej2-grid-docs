var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  selectionSettings: { mode: 'Cell', type: 'Multiple' },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      {
        field: 'OrderDate',headerText: 'Order Date',width: 130,format: 'yMd',textAlign: 'Right'
      },
      { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
      {
        field: 'ShippedDate',headerText: 'Shipped Date',width: 130,format: 'yMd',textAlign: 'Right'
      },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
  ],
  height: 315
});
grid.appendTo('#Grid');