ej.grids.Grid.Inject(ej.grids.Aggregate);

var customAggregateFn = function () {
  let distinct = new ej.data.DataUtil.distinct(data, 'ShipCountry', true);
  return distinct.length;
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
          footerTemplate: 'Distinct Count: ${Custom}',
        },
      ],
    },
  ],
});
grid.appendTo('#Grid');