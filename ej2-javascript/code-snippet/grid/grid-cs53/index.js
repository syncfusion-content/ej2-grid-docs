ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.ExcelExport, ej.grids.Page, ej.grids.Toolbar, ej.grids.Filter);
var grid = new ej.grids.Grid({
        dataSource: data,
        allowPdfExport: true,
        allowExcelExport: true,
        allowPaging: true,
        allowFiltering: true,
        selectionSettings: {type: 'Multiple'},
        toolbar: ['PdfExport','ExcelExport'],
        pageSettings: { pageCount: 5, pageSize: 5 },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCountry', visible: false, headerText: 'Ship Country', width: 150 }
        ],
    });
grid.appendTo('#Grid');
grid.toolbarClick = (args) => {
    if (args.item.id === 'Grid_pdfexport') {
        let pdfdata = grid.getSelectedRecords();
            let exportProperties = {
                dataSource: pdfdata,
            };
            grid.pdfExport(exportProperties);
        }
    else if (args.item.id === 'Grid_excelexport') {
        let exceldata = grid.getSelectedRecords();
            let exportProperties = {
                dataSource: exceldata,
            };
            grid.excelExport(exportProperties);
        }
    }


