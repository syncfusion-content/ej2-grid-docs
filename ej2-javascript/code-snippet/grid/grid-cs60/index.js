ej.grids.Grid.Inject(ej.grids.ExcelExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'ProductName', headerText: 'Product Name', width: 100 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 80 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');
grid.toolbarClick = function (args) {
    if (args['item'].id === 'Grid_excelexport') {
        grid.showSpinner();
        grid.excelExport();
    }
}
grid.excelExportComplete = () => {
    grid.hideSpinner();
}