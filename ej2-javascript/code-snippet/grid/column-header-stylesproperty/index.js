var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    {
      field: 'OrderID',
      customAttributes: { class: 'customcss' },
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right',
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
    {
      field: 'OrderDate',
      customAttributes: { class: 'customcss' },
      headerText: 'Order Date',
      width: 130,
      format: 'yMd',
      textAlign: 'Right',
    },
    {
      field: 'ShippedDate',
      headerText: 'Shipped Date',
      width: 130,
      format: 'yMd',
      textAlign: 'Right',
    },
  ],
});
grid.appendTo('#Grid');
