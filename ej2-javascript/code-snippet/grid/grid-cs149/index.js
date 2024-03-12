ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    pdfExportComplete: pdfExportComplete,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ProductName', headerText: 'Product Name', width: 110 },
        { field: 'Quantity', headerText: 'Quantity', width: 100 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.showSpinner();
        grid.pdfExport();
    }
}

function pdfExportComplete()
{
        grid.hideSpinner();
}