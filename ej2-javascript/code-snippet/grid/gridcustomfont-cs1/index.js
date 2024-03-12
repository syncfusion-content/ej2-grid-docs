ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar, ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCity'] },
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args){
    if (args['item'].id === 'Grid_pdfexport') {
        var pdfExportProperties = {
            theme: {
                header: {
                    font: new ej.pdfexport.PdfTrueTypeFont(base64AlgeriaFont, 12),
                    fontColor: '#000080',
                    bold: true,
                    border: { color: '#5A5A5A', dashStyle: 'Solid' }
                },
                caption: {
                    font: new ej.pdfexport.PdfTrueTypeFont(base64AlgeriaFont, 10),
                    fontColor: '#0B6623',
                    bold: true,
                },
                record: {
                    font: new ej.pdfexport.PdfTrueTypeFont(base64AlgeriaFont, 9),
                    fontColor: '#B22222',
                    bold: true,
                }
            }
        };
        grid.pdfExport(pdfExportProperties);
    }
}