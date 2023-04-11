ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Aggregate);

var customAggregateFn = function() {
let results = new ej.data.DataManager(this.currentViewData).executeLocal(new ej.data.Query().select(['ShipCountry']));
let distinct = new ej.data.DataUtil.distinct(results, 'ShipCountry', true);
return distinct.length;
}

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
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

