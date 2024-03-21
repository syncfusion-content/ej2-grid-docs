var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    enablePersistence: true,
    height: 230,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
  });
  grid.appendTo('#Grid');
  
  var addButton = new ej.buttons.Button();
  addButton.appendTo('#add');
  document.getElementById('add').addEventListener('click', function () {
    var obj = { field: "Freight", headerText: 'Freight', width: 120 };
    grid.columns.push(obj); // you can add the columns by using the Grid columns method
    grid.refreshColumns();
  });