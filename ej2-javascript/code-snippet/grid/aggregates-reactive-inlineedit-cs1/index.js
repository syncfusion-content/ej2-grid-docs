ej.grids.Grid.Inject(ej.grids.Aggregate, ej.grids.Page, ej.grids.Toolbar, ej.grids.Edit, ej.grids.Group);

var selectedRecords;

var grid = new ej.grids.Grid({
  dataSource: data,
  height: 200,
  allowPaging: true,
  pageSettings: { pageSize: 7 },
  toolbar: ["Edit", "Delete", "Update", "Cancel"],
  editSettings: { allowEditing: true, allowDeleting: true, mode: "Normal" },
  actionBegin: function (args) {
    if (args.requestType === "beginEdit") {
      selectedRecords = args.rowData;
    }
  },
  columns: [
    {
      field: "OrderID",
      headerText: "Order ID",
      isPrimaryKey: true,
      textAlign: "Right",
      width: 120,
    },
    { field: "CustomerID", headerText: "Customer ID", width: 150 },
    {
      field: "Freight",
      headerText: "Freight",
      editType: "numericedit",
      format: "C2",
      edit: {
        params: {
          change: function (args) {
            let gridObj = document.getElementById('Grid')['ej2_instances'][0];
            selectedRecords["Freight"] = args.value; // Set the edited value to aggregate column
            gridObj.aggregateModule.refresh(selectedRecords); // Refresh aggregates using edited data
          },
        },
      },
      width: 150,
    },
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
  ],
});
grid.appendTo("#Grid");