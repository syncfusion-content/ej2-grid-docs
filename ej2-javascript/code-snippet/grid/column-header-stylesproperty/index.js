var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      customAttributes: { class: 'customcss' },
      textAlign: 'Center',
    },
    { field: 'CustomerName', headerText: 'Customer Name', textAlign: 'Center' },
    {
      field: 'Freight',
      headerText: 'Freight',
      customAttributes: { class: 'customcss' },
      textAlign: 'Center',
    },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      format: 'yMd',
      textAlign: 'Center',
    },
  ],
});
grid.appendTo('#Grid');
