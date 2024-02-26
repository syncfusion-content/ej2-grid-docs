var grid = new ej.grids.Grid({
    dataSource: orderDetails,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', width: '120', textAlign: 'Right' },
      { field: 'CustomerID', headerText: 'Customer Name', width: '150' },
      { field: 'OrderDate', headerText: 'Order Date', width: '130', format: 'yMd', textAlign: 'Right' },
      { field: 'Freight', headerText: 'Freight', width: '120', format: 'C2', textAlign: 'Right' },
      { field: 'ShippedDate', headerText: 'Shipped Date', width: '130', format: 'yMd', textAlign: 'Right' },
      { field: 'ShipCountry', headerText: 'Ship Country', width: '150' }
    ]
});
grid.appendTo('#Grid');

var checkbox = new ej.buttons.CheckBox({ label: 'Show / Hide Row', change: onCheckBoxChange });
checkbox.appendTo('#checkbox');

var hiddenRows = [];
var message = document.getElementById('message');

function onCheckBoxChange(args) {
  if (args.checked) {
    for (var i = 0; i < grid.getRowsObject().length; i++) {
      if (grid.getRowsObject()[i].data.CustomerID === 'VINET') {
        // check the row value
        var rowIndex = grid.getRowsObject()[i].index;  //get particular row index
        grid.getRowByIndex(rowIndex).style.display = 'none'; //hide row
        hiddenRows.push(rowIndex); // add row index to hiddenRows array
      }
    }
    if (hiddenRows.length > 0) {
      message.innerText  = 'Rows with a customer name column value of VINET have been hidden';
    }
  } else {
    // Show hidden rows
    hiddenRows.forEach((rowIndex) => {
      grid.getRowByIndex(rowIndex).style.display = '';
    });
    hiddenRows = [];
    message.innerText  = 'Show all hidden rows';
  }
}