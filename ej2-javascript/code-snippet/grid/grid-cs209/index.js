ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);

var firstGrid = new ej.grids.Grid({
  dataSource: data,
  allowPdfExport: true,
  exportGrids: ['FirstGrid', 'SecondGrid'],
  toolbar: ['PdfExport'],
  toolbarClick: toolbarClick,
  columns: [
    {field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 90},
    {field: 'CustomerID',headerText: 'Customer ID',width: 100},
    {field: 'ShipCity',headerText: 'Ship City',width: 100},
    {field: 'ShipName',headerText: 'Ship Name',width: 110}
  ]
});
firstGrid.appendTo('#FirstGrid');

var SecondGrid = new ej.grids.Grid({
  dataSource: employeeData,
  allowPdfExport: true,
  columns: [
    {field: 'EmployeeID',headerText: 'Employee ID',textAlign: 'Right',width: 90},
    {field: 'FirstName',headerText: 'First Name',width: 100},
    {field: 'LastName',headerText: 'Last Name',width: 100},
    {field: 'City', headerText: 'City', width: 100 }
  ]
});
SecondGrid.appendTo('#SecondGrid');

var sameSheetPdfProperties = {
  multipleExport: { type: 'AppendToPage', blankSpace: 10 },
};

function toolbarClick(args) {
  if (args.item.text === 'PDF Export') {
    firstGrid.pdfExport(sameSheetPdfProperties, true);
  }
};