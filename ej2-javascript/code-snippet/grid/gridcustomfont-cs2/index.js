ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar, ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCity'] },
    toolbarClick: toolbarClick,
    queryCellInfo: queryCellInfo,
    pdfQueryCellInfo: pdfQueryCellInfo,
    queryCellInfo: queryCellInfo,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args){
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport(pdfExportProperties);
    }
}

function pdfQueryCellInfo()
{
    if (args.column.field === 'Freight') {
        if ((args.value) < 30) {
            (args.style)= { backgroundColor: '#99ffcc' };
        } else if ((args.value) < 60) {
            (args.style) = { backgroundColor: '#ffffb3' };
        } else {
            (args.style) = { backgroundColor: '#ff704d' };
        }
    }
}

function queryCellInfo()
{
    if (column.field === 'Freight') {
        var FreightData= data.Freight;
        if (FreightData < 30) {
            cell.style.background = '#99ffcc';
        } else if (FreightData < 60) {
            cell.style.background = '#ffffb3';
        } else {
            cell.style.background = '#ff704d';
        }
    }
}