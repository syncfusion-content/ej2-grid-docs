import { Grid, Aggregate, Group } from "@syncfusion/ej2-grids";
import { data } from "./datasource.ts";

Grid.Inject(Aggregate, Group);

let grid: Grid = new Grid({
  dataSource: data,
  height: 240,
  allowGrouping: true,
  groupSettings: { showDropArea: false, columns: ["ShipCountry"] },
  columns: [
    {
      field: "OrderID",
      headerText: "Order ID",
      textAlign: "Right",
      width: 120,
    },
    { field: "CustomerID", headerText: "Customer ID", width: 150 },
    { field: "OrderDate", headerText: "Order Date", format: "yMd", width: 120 },
    { field: "Freight", headerText: "Freight", format: "C2", width: 150 },
    { field: "ShipCountry", headerText: "Ship Country", width: 150 },
  ],
  aggregates: [
    {
      columns: [
        {
          type: "Sum",
          field: "Freight",
          groupFooterTemplate: "Sum: ${Sum}",
        },
      ],
    },
  ],
});
grid.appendTo("#Grid");