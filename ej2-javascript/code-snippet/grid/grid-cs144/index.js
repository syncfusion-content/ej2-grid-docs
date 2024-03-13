ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    pdfExportComplete: pdfExportComplete,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },

    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.columns[1].visible = true;
        grid.columns[2].visible = false;
        grid.pdfExport();
    }
}
function pdfExportComplete() {
    grid.columns[1].visible = false;
    grid.columns[2].visible = true;
}