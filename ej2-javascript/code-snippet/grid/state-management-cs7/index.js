var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  allowFiltering: true,
  enablePersistence: true,
  height: 210,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150, headerTemplate: '<button>HeaderTemplate</button>' },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150, template: '#template' }
  ]
});
grid.appendTo('#Grid');
var saveButton = new ej.buttons.Button();
saveButton.appendTo('#save');

document.getElementById('save').addEventListener('click', function () {
  var persistedGridSettings = JSON.parse(grid.getPersistData());
  var gridColumns =  Object.assign([],(grid.getColumns()));

  persistedGridSettings.columns.forEach(function (persistedColumn) {
      var column = gridColumns.find(function (col) { return col.field === persistedColumn.field; });
      if (column) {
          persistedColumn.headerText = 'Text Changed';
          persistedColumn.template = column.template;
          persistedColumn.headerTemplate = column.headerTemplate;
      }
  });
  window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
  grid.setProperties(persistedGridSettings);
  document.getElementById('message').innerText = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
});

var restoreButton = new ej.buttons.Button();
restoreButton.appendTo('#restore');
document.getElementById('restore').addEventListener('click', function () {
  var savedSettings = window.localStorage.getItem('gridOrders1');
  if (savedSettings) {
      grid.setProperties(JSON.parse(savedSettings));
      document.getElementById('message').innerText = 'Restored the headerText, template column, and headerTemplate';
  } else {
      document.getElementById('message').innerText = 'No saved settings found.';
  }
});
