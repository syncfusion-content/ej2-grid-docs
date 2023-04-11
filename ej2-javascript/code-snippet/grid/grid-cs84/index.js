var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    allowSorting: true,
    sortSettings: { columns: [{ field: 'CustomerID', direction: 'Descending' }] },
    groupSettings: { columns: ['CustomerID'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 267
});

grid.appendTo('#Grid');

