ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);

var FirstGrid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    exportGrids: ['FirstGrid', 'SecondGrid'],
    columns: [
      {field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 90},
      {field: 'CustomerID',headerText: 'Customer ID',width: 100},
      {field: 'ShipCity',headerText: 'Ship City',width: 100},
      {field: 'ShipName',headerText: 'Ship Name',width: 110},
    ],
    height: 272,
});
FirstGrid.appendTo('#FirstGrid');

var SecondGrid = new ej.grids.Grid({
    dataSource: employeeData,
    allowPdfExport: true,
    exportGrids: ['FirstGrid', 'SecondGrid'],
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'FirstName', width: 140, headerText: 'First Name', type: 'string' },
        { field: 'LastName', headerText: 'Last Name', textAlign: 'Right', width: 120},
        { field: 'City', headerText: 'City', textAlign: 'Right', width: 120},
    ],
    height: 272,
});
SecondGrid.appendTo('#SecondGrid');

var appendPdfExportProperties = {
    multipleExport: { type: 'NewPage' },
  };
  
  FirstGrid.toolbarClick = function (args) {
    if (args.item.text === 'PDF Export') {
      FirstGrid.pdfExport(appendPdfExportProperties, true);
    }
  };