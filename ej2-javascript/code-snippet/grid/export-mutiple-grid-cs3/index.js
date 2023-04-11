ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar);
var firstGrid = new ej.grids.Grid({
    dataSource: data.slice(0, 5),
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
});
firstGrid.appendTo('#FirstGrid');
var secondGrid = new ej.grids.Grid({
    dataSource: employeeData.slice(0, 5),
    allowPaging: true,
    allowPdfExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'FirstName', width: 140, headerText: 'First Name', type: 'string' },
        { field: 'LastName', width: 140, headerText: 'Last Name', type: 'string' },
        { field: 'City', headerText: 'City', textAlign: 'Right', width: 120 },
        { field: 'BirthDate', headerText: 'Birth Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
});
secondGrid.appendTo('#SecondGrid');
firstGrid.toolbarClick = function(args){
if (args['item'].id === 'FirstGrid_pdfexport') {
    var firstGridPdfExport = firstGrid.pdfExport({}, true);
        firstGridPdfExport.then(function(pdfData){
            secondGrid.pdfExport({}, false, pdfData);
            });
        }
    }

