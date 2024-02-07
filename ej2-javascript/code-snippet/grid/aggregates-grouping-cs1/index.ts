import { Grid, Aggregate, Page, Group } from "@syncfusion/ej2-grids";
import { data } from "./datasource.ts";

Grid.Inject(Aggregate, Page, Group);

let grid: Grid = new Grid({
  dataSource: data,
  height: 240,
  allowPaging: true,
  pageSettings: { pageSize: 5 },
  allowGrouping: true,
  groupSettings: {
    showDropArea: false,
    columns: ["ShipCountry"],
    disablePageWiseAggregates: true,
  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
    { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
  ],
  aggregates: [
    {
      columns: [
        {
          type: "Sum",
          field: "Freight",
          groupFooterTemplate: "Sum: ${Sum}",
        },
        {
          type: "Max",
          field: "Freight",
          groupCaptionTemplate: "Max: ${Max}",
        },
        {
          type: 'Sum',
          field: 'Freight',
          footerTemplate: 'Sum: ${Sum}',
        }
      ],
    },
  ],
});
grid.appendTo("#Grid");