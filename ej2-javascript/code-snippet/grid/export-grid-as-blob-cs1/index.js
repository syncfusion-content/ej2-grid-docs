ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    pdfExportComplete: pdfExportComplete,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 230
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport(null, null, null, true);
    }
}

function pdfExportComplete(args) {
    // execute the promise to get the blob data
    args.promise.then((e) => {
        console.log(e.blobData);
    });
};

