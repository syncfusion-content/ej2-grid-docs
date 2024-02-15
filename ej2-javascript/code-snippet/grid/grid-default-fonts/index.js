ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    groupSettings: { columns: ['ShipCity'] },
    allowGrouping: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        var pdfExportProperties = {
            theme: {
                header: {
                    font: new ej.pdfexport.PdfStandardFont(
                        ej.pdfexport.PdfFontFamily.TimesRoman,
                        11,
                        ej.pdfexport.PdfFontStyle.Bold
                    ),
                    fontColor: '#000080',
                    bold: true,
                    border: { color: '#5A5A5A', dashStyle: 'Solid' },
                },
                caption: {
                    font: new ej.pdfexport.PdfStandardFont(ej.pdfexport.PdfFontFamily.TimesRoman, 9),
                    fontColor: '#0B6623',
                    bold: true,
                },
                record: {
                    font: new ej.pdfexport.PdfStandardFont(ej.pdfexport.PdfFontFamily.TimesRoman, 10),
                    fontColor: '#B22222',
                    bold: true,
                },
            }
        };
        grid.pdfExport(pdfExportProperties);
    }
}