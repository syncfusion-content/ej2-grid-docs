var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100, valueAccessor: currencyFormatter },
        { field: 'ShipName', headerText: 'Ship Name', width: 180, valueAccessor: valueAccess },
    ],
    height: 315
});
grid.appendTo('#Grid');

function currencyFormatter(field, data, column) {
    return '€' + data['Freight'];
}

function valueAccess(field, data, column) {
    return data[field] + '-' + data['ShipRegion'];
}

