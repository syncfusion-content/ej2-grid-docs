import { Grid, Aggregate } from "@syncfusion/ej2-grids";
import { data } from "./datasource.ts";

Grid.Inject(Aggregate);

let grid: Grid = new Grid({
  dataSource: data,
  height: 240,
  dataBound: dataBound,
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

function dataBound() {
  grid.getHeaderContent().append(grid.getFooterContent());
}