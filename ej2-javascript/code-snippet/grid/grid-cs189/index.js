var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: { type: 'Multiple' },
  allowPaging: true,
  rowDataBound: rowDataBound,
  dataBound: dataBound,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: 'true', width: 100},
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', width: 120 },
    { field: 'ShipName', headerText: 'ShipName', width: 150 },
  ],
  height: 273,
});
grid.appendTo('#Grid');

var cellIndex = [];

function rowDataBound(args) {
  if (args.data['EmployeeID'] > 3) {
    cellIndex.push(parseInt(args.row.getAttribute('data-rowindex'), 10));
  }
}

function dataBound() {
  if (cellIndex.length) {
    grid.selectRows(cellIndex);
    cellIndex = [];
  }
}
