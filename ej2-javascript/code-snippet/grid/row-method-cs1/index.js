var grid = new ej.grids.Grid({
    dataSource: data.slice(0, 8),
    dataBound:customizeRows,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

function customizeRows(args) {
    grid.getRowByIndex(2).style.background = 'rgb(193, 228, 234)';
}

