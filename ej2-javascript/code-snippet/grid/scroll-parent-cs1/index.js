var grid = new ej.grids.Grid({
    dataSource: data,
    height: '100%',
    width: '100%',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 }
    ]
});
grid.appendTo('#Grid');