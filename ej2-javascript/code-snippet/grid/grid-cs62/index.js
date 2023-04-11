ej.grids.Grid.Inject(ej.grids.Page, ej.grids.PdfExport, ej.grids.ExcelExport, ej.grids.Toolbar);
var queryClone;
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowExcelExport: true,
    toolbar: ['PdfExport', 'ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'ShipCity', headerText: 'ShipCity', textAlign: 'Right', width: 140 }
    ],
    height: 260
});
grid.appendTo('#Grid');
grid.toolbarClick = function(args){
    if (args['item'].id === 'Grid_pdfexport') {
        queryClone = grid.query;
        grid.query = new ej.data.Query().addParams("recordcount", "12");
        grid.pdfExport();
    }
    if (args['item'].id === 'Grid_excelexport') {
        queryClone = grid.query;
        grid.query = new ej.data.Query().addParams("recordcount", "12");
        grid.excelExport();
    }
}
grid.pdfExportComplete = () => {
        grid.query = queryClone;
    }
grid.excelExportComplete = () => {
        grid.query = queryClone;
    }


