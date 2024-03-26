ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Page);
var grid = new ej.grids.Grid({
  dataSource: data,
  toolbar: ['Print'],
  allowPaging: true,
  pageSettings: { pageSize: 6 },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 },
  ],
  beforePrint: beforePrint,
});
grid.appendTo('#Grid');

function beforePrint() {
  var styleElement = document.createElement('style');
  styleElement.innerHTML = `
  .e-grid .e-headercell {
      background: #24a0ed !important;
  }
  .e-grid .e-row .e-rowcell {
      background: #cbecff !important;
  }
  .e-grid .e-altrow .e-rowcell{
      background: #e7d7f7 !important;
  }
  `;
  (document.querySelector('head')).appendChild(styleElement);
}
