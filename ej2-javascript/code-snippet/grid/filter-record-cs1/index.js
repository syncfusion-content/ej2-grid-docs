ej.grids.Grid.Inject(ej.grids.Filter,ej.grids.Page);
var filteredData = [];
var showRecords = false;
var showWarning = false;
var grid = new ej.grids.Grid({
  dataSource: data,
  allowFiltering: true,
  height: 280,
  allowPaging: true,
  pageSettings:{ pageSize: 10, pageCount: 5 },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
    { field: 'ShipCity', headerText: 'Ship City', width: 120 }
  ],
});
grid.appendTo('#Grid');

var filtergrid = new ej.grids.Grid({
  allowPaging: true,
  height: 200,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
    { field: 'ShipCity', headerText: 'Ship City', width: 120 }
  ],
});
filtergrid.appendTo('#filtergrid');

var getFilteredData = new ej.buttons.Button({ cssClass: 'e-success' }, '#getFilteredData');
var clearFilter = new ej.buttons.Button({ cssClass: 'e-danger' }, '#clearFilter');

document.getElementById('getFilteredData').addEventListener('click', function () {
  filteredData = grid.getFilteredRecords();
  showRecords = filteredData.length > 0;
  showWarning = !showRecords;
  document.getElementById('filteredGrid').style.display = showRecords ? 'block' : 'none';
  document.getElementById('msg_warning').style.display = showWarning ? 'block' : 'none';

  if (showRecords) {
    filtergrid.dataSource = filteredData;
  }
});

document.getElementById('clearFilter').addEventListener('click', function () {
grid.clearFiltering();
showRecords = false;
showWarning = false;
document.getElementById('filteredGrid').style.display = 'none';
document.getElementById('msg_warning').style.display = 'none';
});