var tooltip = new ej.popups.Tooltip({
    target: ".e-rowcell", // set the target element to show the tooltip on hovering it
    beforeRender: beforeRender
  }, "#Tooltip");

var grid= new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315
});
grid.appendTo('#Grid');

function beforeRender(args) {
  // event triggered before render the tooltip on target element.
  tooltip.content = args.target.closest("td").innerText;
}

