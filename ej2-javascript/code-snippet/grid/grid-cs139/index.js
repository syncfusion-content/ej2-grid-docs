ej.grids.Grid.Inject(ej.grids.Page, ej.grids.PdfExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 260
});
grid.appendTo('#Grid');
grid.toolbarClick = function(args){
if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}
grid.pdfQueryCellInfo = (args) => {
    if(args.column.field == 'Freight'){
        if(args.value < 30) {
            args.style = {backgroundColor: '#99ffcc'};
        }
        else if(args.value < 60) {
            args.style = {backgroundColor: '#ffffb3'};
        }
        else {
            args.style = {backgroundColor: '#ff704d'};
        }
    }
}
grid.queryCellInfo = (args) => {
    if(args.column.field == 'Freight'){
        if(args.data['Freight'] < 30) {
            args.cell.bgColor = '#99ffcc';
        }
        else if(args.data['Freight'] < 60) {
            args.cell.bgColor = '#ffffb3';
        }
        else {
            args.cell.bgColor = '#ff704d';
        }
    }
}

