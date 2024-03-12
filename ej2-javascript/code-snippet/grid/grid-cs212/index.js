ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page,ej.grids.DetailRow);
var grid = new ej.grids.Grid({
    dataSource: data,
    pdfHeaderQueryCellInfo: pdfHeaderQueryCellInfo,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args){
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function pdfHeaderQueryCellInfo(args)
  {
    args.cell.value = '';
    if (args.cell.value === '') {
      args.cell.height = '';
    }
  }
  