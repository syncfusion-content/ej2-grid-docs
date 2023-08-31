var grid = new ej.grids.Grid({
    dataSource: data.slice(0, 8),
    rowDataBound:rowDataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

function rowDataBound(args) {
    if (args.data['OrderID'] === 10249) {
        args.rowHeight = 90;
    }
}

