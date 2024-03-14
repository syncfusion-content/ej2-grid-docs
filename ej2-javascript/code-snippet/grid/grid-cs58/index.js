ej.grids.Grid.Inject(ej.grids.Page, ej.grids.ExcelExport, ej.grids.Toolbar);

let grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 230
});

var textbox = new ej.inputs.TextBox({
    placeholder: 'Enter file name',
    width: 120
});
textbox.appendTo('#textbox-input');

grid.toolbarClick = (args) => {
    if (args['item'].id === 'Grid_excelexport') {
        var excelExportProperties= {
            fileName: textbox.value !== "" ? textbox.value + '.xlsx' : 'new.xlsx'
        };
        grid.excelExport(excelExportProperties);
    }
}
grid.appendTo('#Grid');