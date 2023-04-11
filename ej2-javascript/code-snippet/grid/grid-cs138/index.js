ej.grids.Grid.Inject(ej.grids.Page, ej.grids.PdfExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: purchaseData,
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120},
        { field: 'CustomerID', width: 140, headerText: 'Customer ID'},
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'ShipName', headerText: 'ShipName', textAlign: 'Right', width: 140 }
    ],
    height: 260
});
grid.appendTo('#Grid');

grid.toolbarClick = function(args) {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

grid.pdfHeaderQueryCellInfo = function(args){
    args.cell.row.pdfGrid.repeatHeader = true;
}

