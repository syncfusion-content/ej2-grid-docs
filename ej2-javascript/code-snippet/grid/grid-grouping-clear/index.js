ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Group);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowGrouping: true,
  groupSettings: { columns: ['CustomerID', 'ShipCity'] },

  columns: [
    { field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 120},
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
  ],
  height: 315,
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button({
  content: 'CLEAR GROUPING',
});
button.appendTo('#button');

document.getElementById('button').onclick = () => {
  grid.clearGrouping();
};