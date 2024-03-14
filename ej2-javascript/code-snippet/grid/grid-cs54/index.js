ej.grids.Grid.Inject(ej.grids.Page, ej.grids.ExcelExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 130 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
    ],
    height: 272
});

var switchObj = new ej.buttons.Switch();
switchObj.appendTo('#switch');

grid.toolbarClick = function(args) {
    if (args['item'].id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
        var excelExportProperties = {
            includeHiddenColumn: switchObj.checked,
        };
        grid.excelExport(excelExportProperties);
    }
}
grid.appendTo('#Grid');