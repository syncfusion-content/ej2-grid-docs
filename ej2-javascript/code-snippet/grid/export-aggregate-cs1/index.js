ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ExcelExport);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2', textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 150, format: 'yMd', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
    aggregates: [{
        columns: [{
            type: 'Custom',
            columnName: 'ShipCountry',
            customAggregate: customAggregateFn,
            footerTemplate: 'Brazil Count: ${Custom}'
        }]
    }],
});

grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport();
    }
}
function customAggregateFn(data) {
    var brazilCount = data.result
        ? data.result.filter(item => item['ShipCountry'] === 'Brazil').length
        : data.filter(item => item['ShipCountry'] === 'Brazil').length;

    return `${brazilCount}`;
}
