ej.grids.Grid.Inject(ej.grids.Aggregate);

var customAggregateFn = function (data, aggColumn) {
  return data.result.filter(function (item) {
    return item[aggColumn.columnName] === 'Brazil';
  }).length;
};

var grid = new ej.grids.Grid({
  dataSource: data,
  height: 240,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'Freight', headerText: 'Freight', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
  ],
  aggregates: [
    {
      columns: [
        {
          type: 'Custom',
          customAggregate: customAggregateFn,
          columnName: 'ShipCountry',
          footerTemplate: 'Brazil Count: ${Custom}',
        },
      ],
    },
  ],
});
grid.appendTo('#Grid');