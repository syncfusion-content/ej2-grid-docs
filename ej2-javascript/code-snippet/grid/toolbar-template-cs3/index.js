ej.grids.Grid.Inject(ej.grids.Toolbar);
var grid = new ej.grids.Grid({
  dataSource: data,
  allowExcelExport: true,
  allowPdfExport: true,
  toolbarTemplate: '#toolbar-template',
  columns: [
    { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
    { field: 'ShipName', headerText: 'ShipName', width: 120 }
  ],
  height: 250,
});
grid.appendTo('#Grid');

var excelExportButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#excelButton');
document.getElementById('excelButton').onclick = function () {
  grid.excelExport();
};
var pdfExportButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#pdfButton');
document.getElementById('pdfButton').onclick = function () {
  grid.pdfExport();
};
var print = new ej.buttons.Button({ cssClass: 'e-outline' }, '#printButton');
document.getElementById('printButton').onclick = function () {
  grid.print();
};