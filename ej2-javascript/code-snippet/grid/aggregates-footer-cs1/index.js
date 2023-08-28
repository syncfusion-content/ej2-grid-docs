ej.grids.Grid.Inject(ej.grids.Aggregate);
var grid = new ej.grids.Grid({
  dataSource: data,
  height: 240,
  columns: [
    {
      field: "OrderID",
      headerText: "Order ID",
      textAlign: "Right",
      width: 120,
    },
    { field: "CustomerID", headerText: "Customer ID", width: 150 },
    { field: "Freight", headerText: "Freight", width: 150 },
    { field: "ShipCountry", headerText: "Ship Country", width: 150 },
  ],
  aggregates: [
    {
      columns: [
        {
          type: "Sum",
          field: "Freight",
          footerTemplate: "Sum: ${Sum}",
        },
      ],
    },
    {
      columns: [
        {
          type: "Max",
          field: "Freight",
          footerTemplate: "Max: ${Max}",
        },
      ],
    },
  ],
});
grid.appendTo("#Grid");
