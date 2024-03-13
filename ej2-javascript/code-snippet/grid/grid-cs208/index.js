ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'OrderDate', headerText: 'Order Date', format:  { type: 'date', format: "EEE, MMM d, ''yy" }, width: 100 },
        {field: 'Freight', headerText: 'Freight', width: 80}
    ],
    height: 272
});
grid.appendTo('#Grid');


function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}