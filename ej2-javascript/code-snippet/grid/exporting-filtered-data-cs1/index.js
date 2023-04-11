ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar, ej.grids.Filter);
var grid = new ej.grids.Grid(
    {
        dataSource: data,
        allowPdfExport: true,
        allowPaging: true,
        allowFiltering: true,
        toolbar: ['PdfExport'],
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

grid.toolbarClick = function(args) {
    if (args.item.id === 'Grid_pdfexport') {
        let pdfdata;
        let query = grid.renderModule.data.generateQuery(); // get grid corresponding query
        for (var i = 0; i < query.queries.length; i++) {
            if (query.queries[i].fn == 'onPage') {
                query.queries.splice(i, 1);    // remove page query to get all records
                break;
            }
        }
        let fdata = new ej.data.DataManager({ json: data }).executeQuery(query).then((e) => {
            pdfdata = e.result;   // get all filtered records
            let exportProperties = {
                dataSource: pdfdata,
            };
            grid.pdfExport(exportProperties);
        }).catch((e) => true);
    }
}

