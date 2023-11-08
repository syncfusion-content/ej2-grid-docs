var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    allowPaging: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120},
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 140}
    ],
    height: 220
});
grid.appendTo('#Grid');

function toolbarClick(args){
    if (args['item'].id === 'Grid_pdfexport') { 
        const pdfExportProperties = {
            dataSource: changedData,
        };
        grid.pdfExport(pdfExportProperties);
    } 
}