ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar);

var grid = new ej.grids.Grid({   
        dataSource: data,
        allowPdfExport: true,
        allowPaging: true,
        toolbarClick: toolbarClick,
        selectionSettings: {type: 'Multiple',  enableSimpleMultiRowSelection: true},
        toolbar: ['PdfExport'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 }
        ]
    });
grid.appendTo('#Grid');

function toolbarClick(args){
    if (args.item.id === 'Grid_pdfexport') {
        var selectedRecords = grid.getSelectedRecords();
            var exportProperties = {
                dataSource: selectedRecords,
            };
            grid.pdfExport(exportProperties);
        }
    }