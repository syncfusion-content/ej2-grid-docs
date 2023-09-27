var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  headerCellInfo: onHeaderCellInfo,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Center',
    },
    { field: 'CustomerID', headerText: 'CustomerID', width: 150 },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 130,
      format: 'yMd',
      textAlign: 'Center',
    },
    { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Center' },
    {
      field: 'ShippedDate', headerText: 'Shipped Date', width: '130',
      format: 'yMd', textAlign: 'Center'
    }
  ],
});
grid.appendTo('#Grid');

function onHeaderCellInfo(args) {
  if (args.cell.column.field == 'OrderDate') {
    args.node.classList.add('customcss');
  }
}
