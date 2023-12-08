ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format:  { type: 'date', format: "EEE, MMM d, ''yy" } },
        {field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2'},
    ],
    height: 272,
});
grid.appendTo('#Grid');


grid.toolbarClick = function (args) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}