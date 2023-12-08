ej.base.enableRipple(true);

var firstGrid = new ej.grids.Grid({
  dataSource: data,
  allowExcelExport: true,
  allowPdfExport: true,
  exportGrids: ['FirstGrid', 'SecondGrid'],
  toolbar: ['PdfExport'],
  columns: [
    {field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 120,type: 'number'},
    {field: 'CustomerID',width: 140,headerText: 'Customer ID',type: 'string'},
    {
      field: 'ShipCity',
      headerText: 'Ship City',
      textAlign: 'Right',
      width: 120,
    },
    {
      field: 'ShipName',
      headerText: 'Ship Name',
      textAlign: 'Right',
      width: 120,
    },
  ],
});
firstGrid.appendTo('#FirstGrid');

var SecondGrid = new ej.grids.Grid({
  dataSource: employeeData,
  allowPdfExport: true,
  columns: [
    {
      field: 'EmployeeID',
      headerText: 'Employee ID',
      textAlign: 'Right',
      width: 120,
      type: 'number',
    },
    {
      field: 'FirstName',
      width: 140,
      headerText: 'First Name',
      type: 'string',
    },
    {
      field: 'LastName',
      headerText: 'Last Name',
      textAlign: 'Right',
      width: 120,
    },
    { field: 'City', headerText: 'City', textAlign: 'Right', width: 120 },
  ],
  height: 272,
});
SecondGrid.appendTo('#SecondGrid');

var sameSheetPdfProperties = {
  multipleExport: { type: 'AppendToPage', blankSpace: 10 },
};
firstGrid.toolbarClick = function (args) {
  if (args.item.text === 'PDF Export') {
    firstGrid.pdfExport(sameSheetPdfProperties, true);
  }
};