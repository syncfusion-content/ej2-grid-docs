ej.grids.Grid.Inject(ej.grids.Aggregate);

var customAggregateFn = function() {
    var distinct = new ej.data.DataUtil.distinct(data, 'ShipCountry', true);
    return distinct.length;
}

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2' },
        { field: "ShipCountry", headerText: "Ship Country", width: 150 }
    ],
    height: 220,
    aggregates: [{
        columns: [{
            type: 'Custom',
            customAggregate: customAggregateFn,
            columnName: 'ShipCountry',
            footerTemplate: 'Distinct Count: ${Custom}'
        }]
    }]
});
grid.appendTo('#Grid');

