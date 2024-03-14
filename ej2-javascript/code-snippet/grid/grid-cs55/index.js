ej.grids.Grid.Inject(ej.grids.ExcelExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 150 }
    ],
    height: 260
});
grid.appendTo('#Grid');
grid.toolbarClick = function(args){
    if (args['item'].id === 'Grid_excelexport') {
        grid.columns[1].visible = true;
        grid.columns[3].visible = false;
        grid.excelExport();
    }
}
grid.excelExportComplete = () => {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
    }