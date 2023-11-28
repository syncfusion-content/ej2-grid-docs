ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    pdfExportComplete: pdfExportComplete,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID',textAlign: 'Right' },
        { field: 'ProductName', headerText: 'Product Name', textAlign: 'Right', width: 120 },
        { field: 'Quantity', headerText: 'Quantity', textAlign: 'Right', width: 140 }
    ],
    height: 260
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args) {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.showSpinner();
        grid.pdfExport();
    }
}

function pdfExportComplete()
{
        grid.hideSpinner();
}