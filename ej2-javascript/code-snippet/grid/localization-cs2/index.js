loadCultureFiles();

function createGrid() {
  var grid = new ej.grids.Grid({
    dataSource: data,
    locale: 'fr-FR',
    allowGrouping: true,
    allowPaging: true,
    editSettings: {allowEditing: true, allowAdding: true, allowDeleting: true},
    toolbar:['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    pageSettings: { pageSize: 6 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 220
  });
  grid.appendTo('#Grid');
}

function loadCultureFiles() {
  var fetch = new ej.base.Fetch('./locale.json', 'GET', false);
  fetch.onSuccess = function (frFRLocalization) {
    ej.base.L10n.load(frFRLocalization );
    createGrid(); // Create the grid after loading the culture files
  };
  fetch.send();
}