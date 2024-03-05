var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format:'C2', width: 90 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 }
        
    ],
    height: 280
});
grid.appendTo('#Grid');

var addColumns = new ej.buttons.Button({ cssClass: 'e-info' }, '#add');
var deleteColumns = new ej.buttons.Button({ cssClass: 'e-info' }, '#delete');

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