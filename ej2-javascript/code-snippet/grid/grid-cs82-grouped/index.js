ej.grids.Grid.Inject(ej.grids.Group);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowGrouping: true,
  groupSettings: { columns: ['CustomerID'] },

  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, allowGrouping: false },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100, allowGrouping: false },
    { field: 'ShipName', headerText: 'Ship Name', width: 120, allowGrouping: false },
  ],
  height: 240,
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button({
  content: 'Collapse or Expand Row',
});
button.appendTo('#button');

var message = document.getElementById('message');

document.getElementById('button').onclick = () => {
  var groupedRows = Array.from(grid.getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse'));
  var groupedRowIndex = parseInt(document.getElementById('rowIndex').value);
  if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
    message.innerHTML = '';
    var groupCaptionElement = groupedRows[groupedRowIndex];
    grid.groupModule.expandCollapseRows(groupCaptionElement);
  }
  else {
    message.innerHTML = 'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
  }
};