var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', format:'C2', width: 90 ,},
        { field: 'OrderDate', headerText: 'OrderDate', format:'yMd',width: 120,}
    ],
});
grid.appendTo('#Grid');