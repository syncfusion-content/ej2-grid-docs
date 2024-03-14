ej.grids.Grid.Inject(ej.grids.ExcelExport, ej.grids.Toolbar, ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowExcelExport: true,
    allowFiltering: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 150 }
    ],
    height: 315
});
grid.toolbarClick = function(args){
    if (args['item'].id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
        var excelExportProperties = {
            enableFilter: true
        };
        grid.excelExport(excelExportProperties);

    }
}
grid.appendTo('#Grid');