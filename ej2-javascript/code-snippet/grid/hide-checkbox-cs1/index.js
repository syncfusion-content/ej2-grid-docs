var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings : { type: 'Multiple' },
    columns: [
        { type: 'checkbox', width:120, headerTemplate: '#headerTemplate' },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', format:'yMd', textAlign:'Right', width: 130 },
        { field: 'Freight', headerText: 'Freight', format:'C2', textAlign:'Right', width: 120 },
        { field: 'ShippedDate', headerText: 'ShippedDate', format:'yMd', textAlign:'Right', width: 130 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');