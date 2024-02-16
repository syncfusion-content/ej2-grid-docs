ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    pdfExportComplete: pdfExportComplete,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 230
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        // pass fourth parameter as true to get the blob data of exported grid
        grid.pdfExport(null, null, null, true);
    }
}

function pdfExportComplete(args) {
    // execute the promise to get the blob data
    if (args && args.promise) {
        // Execute the promise to get the blob data
        args.promise.then(function (e) {
            exportBlob(e.blobData);
        });
    }
};

function exportBlob(blob) {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    var url = window.URL.createObjectURL(blob); // Fix typo here
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url); // Fix typo here
    document.body.removeChild(a);
}