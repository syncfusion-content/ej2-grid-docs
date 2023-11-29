var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    { field: 'OrderID', headerText: 'OrderID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'CustomerID', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
    { field: 'ShipCity', headerText: 'Ship City', format: 'yMd', width: 120 },
  ],
  height: 280,
});
grid.appendTo('#Grid');

var headerTextMap =
{
  'OrderID': 'Order ID',
  'CustomerID': 'Customer ID',
  'Freight': 'Freight Charge',
  'ShipCity': 'Ship To City'
}

var button = new ej.buttons.Button({
  content: 'Change Header Text',
  cssClass: "e-success",
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  grid.columns.forEach((column) => {
    column.headerText = headerTextMap[column.field];
  });
  grid.refreshHeader();

};