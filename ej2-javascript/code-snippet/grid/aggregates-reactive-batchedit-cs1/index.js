ej.grids.Grid.Inject(ej.grids.Aggregate, ej.grids.Page, ej.grids.Toolbar, ej.grids.Edit, ej.grids.Group);

var grid = new ej.grids.Grid({
  dataSource: data,
  height: 200,
  allowPaging: true,
  pageSettings: { pageSize: 6 },
  toolbar: ["Delete", "Update", "Cancel"],
  editSettings: { allowEditing: true, allowDeleting: true, mode: "Batch" },
  allowGrouping: true,
  groupSettings: { showDropArea: false, columns: ["ShipCountry"] },
  columns: [
    {
      field: "OrderID",
      headerText: "Order ID",
      isPrimaryKey: true,
      textAlign: "Right",
      width: 120,
    },
    { field: "CustomerID", headerText: "Customer ID", width: 150 },
    { field: "Freight", headerText: "Freight", width: 150, format: "C2" },
    { field: "ShipCountry", headerText: "Ship Name", width: 150 },
  ],
  aggregates: [
    {
      columns: [
        {
          type: "Sum",
          field: "Freight",
          format: "C2",
          footerTemplate: "Sum : ${Sum}",
        },
      ],
    },
    {
      columns: [
        {
          type: "Sum",
          field: "Freight",
          format: "C2",
          groupFooterTemplate: "Sum : ${Sum}",
        },
      ],
    },
    {
      columns: [
        {
          type: "Max",
          field: "Freight",
          format: "C2",
          groupCaptionTemplate: "Max : ${Max}",
        },
      ],
    },
  ],
});
grid.appendTo("#Grid");