ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page,ej.grids.DetailRow);
var grid = new ej.grids.Grid({
    dataSource: data,
    pdfHeaderQueryCellInfo: pdfHeaderQueryCellInfo,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 260
});
grid.appendTo('#Grid');

grid.toolbarClick = function(args){
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
  