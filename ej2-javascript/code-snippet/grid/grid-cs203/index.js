ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  height: 325,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 }
  ]
});
grid.appendTo('#Grid');

var textbox = new ej.inputs.TextBox({
  width: 120
});
textbox.appendTo('#textboxvalue');

var button = new ej.buttons.Button({
  content: 'click button'
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
  grid.pagerModule.goToPage(textbox.value);
}