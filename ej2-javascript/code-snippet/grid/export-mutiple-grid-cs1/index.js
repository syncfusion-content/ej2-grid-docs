ej.grids.Grid.Inject(ej.grids.ExcelExport, ej.grids.Page, ej.grids.Toolbar);
var firstGrid = new ej.grids.Grid({
    dataSource: data.slice(0, 5),
    allowPaging: true,
    allowExcelExport: true,
    exportGrids: ['FirstGrid', 'SecondGrid'],
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
    height: 315
});
var secondGrid = new ej.grids.Grid({
    dataSource: employeeData.slice(0, 5),
    allowPaging: true,
    allowExcelExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'FirstName', width: 140, headerText: 'First Name', type: 'string' },
        { field: 'LastName', width: 140, headerText: 'Last Name', type: 'string' },
        { field: 'City', headerText: 'City', width: 120 },
    ],
    height: 315
});

firstGrid.toolbarClick = function(args) {
    if (args['item'].id === 'FirstGrid_excelexport') {
        var appendExcelExportProperties = {
            multipleExport: { type: 'AppendToSheet', blankRows: 2 }
        };
        firstGrid.excelExport(appendExcelExportProperties, true);
    }
}
firstGrid.appendTo('#FirstGrid');
secondGrid.appendTo('#SecondGrid');

