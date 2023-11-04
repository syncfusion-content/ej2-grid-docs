var clickHandler = function (args) {
  var target = args.originalEvent.target.closest('.e-toolbar-item');
  if (target.id === 'excelButton') {
    grid.excelExport();
  } else if (target.id === 'pdfButton') {
    grid.pdfExport();
  } else {
    grid.print();
  }
};
ej.grids.Grid.Inject(ej.grids.Toolbar);

var grid = new ej.grids.Grid({
  dataSource: data,
  allowExcelExport: true,
  allowPdfExport: true,
  toolbarTemplate: '#toolbar-template',
  toolbarClick: clickHandler,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
    { field: 'ShipName', headerText: 'ShipName', width: 120 }
  ],
  height: 200,
});
grid.appendTo('#Grid');


