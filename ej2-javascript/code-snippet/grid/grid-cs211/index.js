ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);

var FirstGrid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    exportGrids: ['FirstGrid', 'SecondGrid'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120},
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 120},
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

function toolbarClick(args){
    let appendPdfExportProperties = {
        multipleExport: { type: 'NewPage' }
    };
    if (args.item.id === 'FirstGrid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        FirstGrid.pdfExport(appendPdfExportProperties);
    }
}