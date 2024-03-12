ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar, ej.grids.Filter);
var grid = new ej.grids.Grid({   
        dataSource: data,
        allowPdfExport: true,
        allowFiltering: true,
        allowPaging: true,
        pageSettings: { pageCount: 5, pageSize: 5 },
        toolbarClick: toolbarClick,
        toolbar: ['PdfExport'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 }
        ]
    });
grid.appendTo('#Grid');

function toolbarClick(){
    var filteredRecords = grid.getFilteredRecords();
        var exportProperties = {
          dataSource: filteredRecords,
        };
        grid.pdfExport(exportProperties);
    }