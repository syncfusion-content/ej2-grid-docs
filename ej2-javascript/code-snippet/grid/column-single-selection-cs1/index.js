var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  selectionSettings: { allowColumnSelection: true, type: 'Single' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
    { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
    { field: 'ShipCity', headerText: 'Ship City', width: 130 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 130 }
  ],
  height: 315
});
grid.appendTo('#Grid');