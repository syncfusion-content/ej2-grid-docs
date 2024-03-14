var firstGrid = new ej.grids.Grid({
    dataSource: data.slice(0, 5),
    allowExcelExport: true,
    exportGrids: ['FirstGrid', 'SecondGrid'],
    toolbar: ['ExcelExport'],
    toolbarClick: toolbarClick,
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120 },
      { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 120 },
    ],
  });
  firstGrid.appendTo('#FirstGrid');
  
  var SecondGrid = new ej.grids.Grid({
    dataSource: employeeData.slice(0, 5),
    allowExcelExport: true,
    columns: [
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
      { field: 'FirstName', headerText: 'First Name', width: 150 },
      { field: 'LastName', headerText: 'Last Name', width: 150 },
      { field: 'City', headerText: 'City', width: 150 },
    ],
    height: 272,
  });
  SecondGrid.appendTo('#SecondGrid');
  
  function toolbarClick(args){
    if (args.item.id === 'FirstGrid_excelexport') {
        var appendExcelExportProperties = { multipleExport: { type: 'AppendToPage', blankRows: 2 }};
        firstGrid.excelExport(appendExcelExportProperties, true);
    }
}
  