var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 80, valueAccessor: currencyFormatter },
        { field: 'ShipCity', headerText: 'Ship City', width: 130, valueAccessor: concatenateFields },
    ],
    height: 315
});
grid.appendTo('#Grid');

function currencyFormatter(field, data, column) {
    return '€' + data['Freight'];
}

function concatenateFields(field, data, column) {
    return data[field] + ' - ' + data['ShipRegion'];
}