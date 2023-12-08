var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    allowPaging: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120},
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 140}
    ],
    height: 220
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args) {
    if (args['item'].id === 'Grid_pdfexport') { 
        var pdfExportProperties = {
            dataSource: changedData,
        };
        grid.pdfExport(pdfExportProperties);
    } 
}