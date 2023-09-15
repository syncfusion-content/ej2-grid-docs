var grid = new ej.grids.Grid({
  dataSource: data,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 100,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120},
    { field: 'Freight', headerText: 'Freight', width: 120},
    { field: 'ShipCity', headerText: 'Ship City', format: 'yMd', width: 100},
  ],

  height: 280,
});
grid.appendTo('#Grid');
let   headerTextMap = {
  'OrderID': 'Order ID',
  'CustomerID': 'Customer ID',
  'Freight': 'Freight Charge',
  'ShipCity': 'Ship To City'
},

button = new ej.buttons.Button({
  content: 'Change Header Text',
  cssClass: "e-success",
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function (args) {
  grid.columns.forEach((column) => {
    column.headerText = headerTextMap[column.field];
});
grid.refreshHeader();
 
};
