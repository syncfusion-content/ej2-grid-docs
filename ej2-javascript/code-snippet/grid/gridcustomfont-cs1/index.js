ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar, ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowGrouping: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Rendelés azonosító', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Ügyfél-azonosító', type: 'string' },
        { field: 'Freight', headerText: 'fuvar', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Rendelés dátuma', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 260
});
grid.appendTo('#Grid');
grid.toolbarClick= function(args){
    if (args['item'].id === 'Grid_pdfexport') {
        var pdfExportProperties = {
            theme: {
                header: {font:  new ej.pdfexport.PdfTrueTypeFont(window.adventProFont, 12) },
                caption: { font: new ej.pdfexport.PdfTrueTypeFont(window.adventProFont, 10) },
                record: { font: new ej.pdfexport.PdfTrueTypeFont(window.adventProFont, 9) }
            }
        };
        grid.pdfExport(pdfExportProperties);
    }
}

