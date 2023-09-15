var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var addColumn = new ej.buttons.Button({ cssClass: 'e-info' }, '#add');
var deleteColumn = new ej.buttons.Button({ cssClass: 'e-info' }, '#delete');

document.getElementById('add').onclick = function () {
    var newColumns = [
      { field: 'EmployeeID', headerText: 'EmployeeID', width: 120 },
      { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
    ];
    newColumns.forEach(function (col) {
      grid.columns.push(col);
    });
    grid.refreshColumns(); 
    };
  
  document.getElementById('delete').onclick = function () {
    grid.columns.pop();
    grid.refreshColumns();
  };

