var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings: {checkboxMode: 'ResetOnRowClick'},
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCountry', width: 140, headerText: 'Ship Country', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ],
    height: 315
});
grid.appendTo('#Grid');


