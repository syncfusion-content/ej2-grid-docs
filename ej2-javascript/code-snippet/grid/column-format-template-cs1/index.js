var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
    { field: 'OrderDate', headerText: 'Order Date', template: '#dateTemplate', textAlign: 'Right', width: 120 },
    { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 150 }

  ],
  height: 315
});
grid.appendTo('#Grid');