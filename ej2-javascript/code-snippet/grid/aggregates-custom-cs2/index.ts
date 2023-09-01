import { Grid, Aggregate } from "@syncfusion/ej2-grids";
import { data } from "./datasource.ts";
import { DataManager, Query, DataUtil } from "@syncfusion/ej2-data";

Grid.Inject(Aggregate);

let customAggregateFn = function () {
  let distinct = DataUtil.distinct(data, "ShipCountry", true);
  return distinct.length;
};

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
          footerTemplate: "Distinct Count: ${Custom}",
        },
      ],
    },
  ],
});
grid.appendTo("#Grid");