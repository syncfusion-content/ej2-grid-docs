var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', headerText: 'Customer ID',width: 140, },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 120 },
                { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 140 }
    ],
    height: 315
});

grid.appendTo('#Grid');

