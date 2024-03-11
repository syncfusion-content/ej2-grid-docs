ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100}
    ],
    height: 272,
    aggregates: [{
                    columns: [{
                        type: 'Custom',
                        customAggregate: customAggregateFn,
                        columnName: 'ShipCountry',
                        footerTemplate: 'Brazil Count: ${Custom}'
                    }]
    }]
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function customAggregateFn(customData) {
    var data;

    if ('result' in customData && Array.isArray(customData.result)) {
        data = customData.result;
    } else {
        data = customData;
    }

    var brazilCount = data.filter((item) => item.ShipCountry === 'Brazil').length;
    return `${brazilCount}`;
}