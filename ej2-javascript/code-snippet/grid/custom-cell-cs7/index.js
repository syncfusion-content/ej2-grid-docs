
var grid= new ej.grids.Grid({
  dataSource: data,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
      { field: 'freight', headerText: 'Freight', textAlign: 'Right',format: 'C2', width: 90 },
      { field: 'ShipName', headerText: 'Ship Name', width: 120 }
  ],
  height: 315
});
grid.appendTo('#Grid');

var tooltip = new ej.popups.Tooltip({
  target: ".e-rowcell", // set the target element to show the tooltip on hovering it
  beforeRender: beforeRender
});
tooltip.appendTo('#Tooltip');

function beforeRender(args) {
  if (args.target.classList.contains('e-rowcell')) {
      tooltip.content = 'The value is "' + args.target.innerText + '" ';
  }
}