ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
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
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        var pdfExportColumns = [
            { field: 'OrderID', textAlign: 'Right', width: '90' },
            { field: 'CustomerID', headerText: 'Customer Name', width: '100' },
            { field: 'Freight', textAlign: 'Center', width: '80' },
        ];

        var pdfExportProperties = {
            columns: pdfExportColumns
        };
        grid.pdfExport(pdfExportProperties);
    }
}