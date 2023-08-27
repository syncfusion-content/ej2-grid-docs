ej.grids.Grid.Inject(ej.grids.Aggregate, ej.grids.Group);
var grid = new ej.grids.Grid({
  dataSource: data,
  height: 240,
  allowGrouping: true,
  groupSettings: { showDropArea: false, columns: ['ShipCountry'] },
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      format: 'yMd',
      type: 'date',
      width: 120,
    },
    {
      field: 'ShippedDate',
      headerText: 'Shipped Date',
      format: 'yMd',
      type: 'date',
      width: 120,
    },
    { field: 'Freight', headerText: 'Freight', width: 150 },
    {
      field: 'Verified',
      headerText: 'Verified',
      type: 'boolean',
      width: 150,
    },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
  ],
  aggregates: [
    {
      columns: [
        {
          type: 'Max',
          field: 'Freight',
          footerTemplate: 'Max: ${Max}',
          format: 'C2',
        },
        {
          type: 'Max',
          field: 'ShippedDate',
          footerTemplate: 'Max: ${new Date(Max).toLocaleDateString()}',
        },
        {
          type: 'Min',
          field: 'OrderDate',
          footerTemplate: 'Min: ${new Date(Min).toLocaleDateString()}',
        },
        {
          type: 'TrueCount',
          field: 'Verified',
          footerTemplate: 'True Count: ${TrueCount}',
        },
      ],
    },
  ],
});
grid.appendTo('#Grid');