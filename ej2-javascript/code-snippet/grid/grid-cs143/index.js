ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar);
var grid = new ej.grids.Grid({   
        dataSource: data,
        allowPdfExport: true,
        allowPaging: true,
        toolbarClick: toolbarClick,
        toolbar: ['PdfExport'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 130 },
            { field: 'ShipCity', headerText: 'Ship City',visible: false, width: 120 },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
        ]
    });
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    value: 'Enable or disable includeHiddenColumn property'
});
toggle.appendTo('#switch');

function toolbarClick(args){
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        var pdfExportProperties = {
            includeHiddenColumn: toggle.checked,
        };
        grid.pdfExport(pdfExportProperties);
    }
}