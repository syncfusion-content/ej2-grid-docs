ej.grids.Grid.Inject(ej.grids.Resize);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', minWidth: 100, width: 150, maxWidth: 250 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', width: 120 },
    { field: 'ShipName', headerText: 'Ship Name', minWidth: 150, width: 200, maxWidth: 300},
    { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right',minWidth: 120, width: 150, maxWidth: 280},
    { field: 'ShipAddress', headerText: 'Ship Address', width: 120 },
    { field: 'Freight', headerText: 'Freight', width: 80 }
  ],
});
grid.appendTo('#Grid');