import { Grid, Aggregate, Page, Group } from "@syncfusion/ej2-grids";
import { data } from "./datasource.ts";

Grid.Inject(Aggregate, Page, Group);

let grid: Grid = new Grid({
  dataSource: data,
  height: 240,
  allowPaging: true,
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
    { field: "Freight", headerText: "Freight", width: 150 },
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
    {
      columns: [
        {
          type: "Max",
          field: "Freight",
          groupCaptionTemplate: "Max: ${Max}",
        },
      ],
    },
  ],
});
grid.appendTo("#Grid");