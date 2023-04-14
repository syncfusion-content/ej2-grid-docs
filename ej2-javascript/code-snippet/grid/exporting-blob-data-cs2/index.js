var datePickerObj;
var excelExpComplete = (args) => {
    //This event will be triggered when excel exporting.  
    args.promise.then((e: { blobData: Blob }) => {
        //In this `then` function, we can get blob data through the arguments after promise resolved.           
        console.log(e.blobData);
    });
};
var pdfExpComplete= (args) => {
    //This event will be triggered when pdf exporting.
    args.promise.then((e: { blobData: Blob }) => {
        //In this `then` function, we can get blob data through the arguments after promise resolved.                 
        console.log(e.blobData);
    });
};
ej.grids.Grid.Inject(ej.grids.ExcelExport, ej.grids.PdfExport, ej.grids.Page, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    {
        dataSource: data,
        allowExcelExport: true,
        allowPdfExport: true,
        excelExportComplete: excelExpComplete,
        pdfExportComplete: pdfExpComplete,
        toolbar: ['PdfExport','ExcelExport'],
        columns: [
            {
                field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90
            },
            {
                field: 'CustomerID', headerText: 'Customer ID', width: 90
            },
            { field: 'ShipCity', headerText: 'Ship City', width: 90 },
        ]
    });
grid.appendTo('#Grid');
grid.toolbarClick = (args) => {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport(null, null, null, true);
    }
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport(null, null, null, true);
    }

}