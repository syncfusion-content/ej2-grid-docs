var numberFormatOptions= {
  // Custom format for numeric columns
  format: '##.0000',
};
var dateFormatOptions={
  // Custom format for date columns
  type: 'Date',
  format: "EEE, MMM d, ''yy",
};
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 90, format: numberFormatOptions },
      { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 120, format: dateFormatOptions }
  ],
    height: 315
});
grid.appendTo('#Grid');