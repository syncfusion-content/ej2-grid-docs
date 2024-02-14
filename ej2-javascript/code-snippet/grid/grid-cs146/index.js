ej.grids.Grid.Inject(ej.grids.PdfExport, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 220
});
grid.appendTo('#Grid');

var ddlData = [
    { text: 'Letter', value: 'Letter' },
    { text: 'Note', value: 'Note' },
    { text: 'Legal', value: 'Legal' },
    { text: 'A0', value: 'A0' },
    { text: 'A1', value: 'A1' },
    { text: 'A2', value: 'A2' },
    { text: 'A3', value: 'A3' },
    { text: 'A4', value: 'A4' },
    { text: 'A5', value: 'A5' },
    { text: 'A6', value: 'A6' },
    { text: 'A7', value: 'A7' },
    { text: 'A8', value: 'A8' },
    { text: 'B0', value: 'B0' },
    { text: 'B1', value: 'B1' },
    { text: 'B2', value: 'B2' },
    { text: 'B3', value: 'B3' },
    { text: 'B4', value: 'B4' },
    { text: 'B5', value: 'B5' },
    { text: 'Archa', value: 'Archa' },
    { text: 'Archb', value: 'Archb' },
    { text: 'Archc', value: 'Archc' },
    { text: 'Archd', value: 'Archd' },
    { text: 'Arche', value: 'Arche' },
    { text: 'Flsa', value: 'Flsa' },
    { text: 'HalfLetter', value: 'HalfLetter' },
    { text: 'Letter11x17', value: 'Letter11x17' },
    { text: 'Ledger', value: 'Ledger' }
];

var dropDownList = new ej.dropdowns.DropDownList({
    value: 'Letter',
    popupHeight: '240px',
    width: 100,
    dataSource: ddlData
  });
dropDownList.appendTo('#dropdown');

function toolbarClick(args){
    if (args.item.id === 'Grid_pdfexport') {
        var exportProperties = {
            pageSize: dropDownList.value
        };
        grid.pdfExport(exportProperties);
    }
}