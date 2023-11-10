ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);

var grid = new ej.grids.Grid({
    dataSource: data,
    gridLines: 'Both',
    allowPdfExport: true,
    allowPaging: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    pdfQueryCellInfo: pdfQueryCellInfo,
    queryCellInfo: queryCellInfo,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        {field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2'},
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120},
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 140}
    ],
    height: 272,
});
grid.appendTo('#Grid');

function toolbarClick(args){
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function queryCellInfo(args) {
    let data = (args.data).OrderID;
    switch (data) {
        case 10248:
            if ((args.column).field === 'CustomerID') {
                args.rowSpan = 2;
            }
            break;
        case 10250:
            if ((args.column).field === 'CustomerID') {
                args.colSpan = 2;
            }
            break;
        case 10252:
            if ((args.column).field === 'OrderID') {
                args.rowSpan = 3;
            }
            break;
        case 10256:
            if ((args.column).field === 'CustomerID') {
                args.colSpan = 3;
            }
            break;
        case 10261:
            if ((args.column).field === 'Freight') {
                args.colSpan = 2;
            }
            break;
    }
}

function pdfQueryCellInfo(args)
{
    let data = (args.data).OrderID;
        switch (data) {
            case 10248:
                if ((args.column).field === 'CustomerID') {
                    (args.cell ).rowSpan = 2;
                }
                break;
            case 10250:
                if ((args.column).field === 'CustomerID') {
                    args.colSpan = 2;
                }
                break;
            case 10252:
                if ((args.column).field === 'OrderID') {
                    (args.cell ).rowSpan = 3;
                }
                break;
            case 10256:
                if ((args.column).field === 'CustomerID') {
                    args.colSpan = 3;
                }
                break;
            case 10261:
                if ((args.column).field === 'Freight') {
                    args.colSpan = 2;
                }
                break;
        }
}