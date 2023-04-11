ej.grids.Grid.Inject(ej.grids.Page, ej.grids.ExcelExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['ExcelExport'],
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
        grid.columns[1].visible = true;
        grid.columns[3].visible = false;
        grid.pdfExport();
    }
}
grid.excelExportComplete = () => {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
    }


