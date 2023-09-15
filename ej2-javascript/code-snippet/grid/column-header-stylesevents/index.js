var grid = new ej.grids.Grid({
  dataSource: data,
  headerCellInfo: headerCellInfo,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right',
    },
    { field: 'CustomerID', headerText: 'CustomerID', width: 140 },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 130,
      format: 'yMd',
      textAlign: 'Right',
    },
    { field: 'Freight', headerText: 'Freight', width: 120 },
    {field: 'ShippedDate', headerText: 'Shipped Date', width: '130',
    format: 'yMd'}
  ],
});
grid.appendTo('#Grid');

function headerCellInfo(args) {
  if (args.cell.column.field == 'OrderDate') {
    args.node.classList.add('customcss');
  }
}
