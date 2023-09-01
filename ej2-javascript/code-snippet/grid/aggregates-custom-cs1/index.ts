import { Grid, Aggregate } from "@syncfusion/ej2-grids";
import { data } from "./datasource.ts";

Grid.Inject(Aggregate);

let customAggregateFn = (data: Object, aggColumn: Object) =>
  data.result.filter((item: Object) => item[aggColumn.columnName] === "Brazil").length;

let grid: Grid = new Grid({
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
          type: "Custom",
          customAggregate: customAggregateFn,
          columnName: "ShipCountry",
          footerTemplate: "Brazil Count: ${Custom}",
        },
      ],
    },
  ],
});
grid.appendTo("#Grid");