ej.grids.Grid.Inject(ej.grids.Aggregate);
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 210,
    aggregates: [{
        columns: [{
            type: 'Sum',
            field: 'Freight',
            footerTemplate: 'Sum: ${Sum}'
        }]
    },
    {
        columns: [{
            type: 'Max',
            field: 'Freight',
            footerTemplate: 'Max: ${Max}'
        }]
    }]
});
grid.appendTo('#Grid');