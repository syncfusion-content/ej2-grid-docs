ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 272
});
grid.appendTo('#Grid');

var dropDownData = [
    { text: 'Portrait', value: 'Portrait' },
    { text: 'Landscape', value: 'Landscape' }
];

var dropDownList = new ej.dropdowns.DropDownList({
    value: 'Portrait',
    popupHeight: '240px',
    width: 100,
    dataSource: dropDownData
  });
dropDownList.appendTo('#dropdown');

function toolbarClick(args){
    if(args.item.id === 'Grid_pdfexport') {
        var pdfExportProperties = {
            pageOrientation: dropDownList.value,
        };
        grid.pdfExport(pdfExportProperties);
    }
}