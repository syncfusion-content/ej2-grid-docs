var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['ExcelExport', 'CsvExport'],
    allowExcelExport: true,
    height: '230px',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    toolbarClick: toolbarClick,
    excelExportComplete: excelExportComplete
});

grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_excelexport') {
         // pass undefined to use default settings
        grid.excelExport(undefined, undefined, undefined, true);
    }
    if (args.item.id === 'Grid_csvexport') {
         // pass undefined to use default settings
        grid.csvExport(undefined, undefined, undefined, true);
    }
}

function excelExportComplete(args) {
    if (args && args.promise) {
        // execute the promise to get the blob data
        args.promise.then((e) => {
            exportBlob(e.blobData);
        });
    }
}

function exportBlob(blob) {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    var url = window.URL.createObjectURL(blob); // Fix typo here
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url); // Fix typo here
    document.body.removeChild(a);
}