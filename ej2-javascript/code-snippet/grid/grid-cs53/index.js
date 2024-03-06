ej.grids.Grid.Inject(ej.grids.ExcelExport, ej.grids.Page, ej.grids.Toolbar, ej.grids.Filter);
var grid = new ej.grids.Grid({
        dataSource: data,
        allowExcelExport: true,
        allowPaging: true,
        toolbar: ['ExcelExport'],
        selectionSettings: { type: 'Multiple', enableSimpleMultiRowSelection: true},
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        ],
    });
grid.appendTo('#Grid');
grid.toolbarClick = (args) => {
    if (args.item.id === 'Grid_excelexport') {
       var selectedRecords =grid.getSelectedRecords();
       var exportProperties = {
            dataSource: selectedRecords
        };
       grid.excelExport(exportProperties);
        }
    }