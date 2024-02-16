ej.grids.Grid.Inject(ej.grids.Page, ej.grids.PdfExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name',  width: 120 }
    ],
    height: 260
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        var exportProperties = {
            exportType: 'CurrentPage'
        };
        grid.pdfExport(exportProperties);
    }
}