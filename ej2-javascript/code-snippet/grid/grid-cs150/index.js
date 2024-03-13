ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    allowPaging: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 110},
        { field: 'ShipName', headerText: 'Ship Name', width: 120}
    ],
    height: 220
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_pdfexport') { 
        var pdfExportProperties = {
            dataSource: changedData,
        };
        grid.pdfExport(pdfExportProperties);
    } 
}