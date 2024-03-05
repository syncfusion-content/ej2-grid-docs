ej.grids.Grid.Inject(ej.grids.Page, ej.grids.PdfExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: purchaseData,
    toolbar: ['PdfExport'],
    pdfHeaderQueryCellInfo: pdfHeaderQueryCellInfo,
    toolbarClick: toolbarClick,
    allowPaging: true,
    allowPdfExport: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90},
        { field: 'CustomerID', headerText: 'Customer ID', width: 100},
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function pdfHeaderQueryCellInfo(args){
    args.cell.row.pdfGrid.repeatHeader = true;
}