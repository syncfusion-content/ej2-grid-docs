var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', type: 'number', textAlign: 'Right', headerTextAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', type: 'string', textAlign: 'Left', headerTextAlign: 'Left', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', type: 'date', textAlign: 'Center', headerTextAlign: 'Center', format: 'yMd', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', type: 'string', textAlign: 'Justify', headerTextAlign: 'Justify', width: 120 }
],
    height: 315
});

grid.appendTo('#Grid');

