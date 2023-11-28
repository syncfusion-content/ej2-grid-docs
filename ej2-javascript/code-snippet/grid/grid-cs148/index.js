ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 150, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 150},
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 150 }
    ],
    height: 272
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args) {
    if (args.item.id === 'Grid_pdfexport') { 
        grid.pdfExport();
    }
}