import { Grid, Aggregate, Group } from "@syncfusion/ej2-grids";
import { data } from "./datasource.ts";

Grid.Inject(Aggregate, Group);

let grid: Grid = new Grid({
  dataSource: data,
  height: 290,
  allowGrouping: true,
  groupSettings: { showDropArea: false, columns: ['ShipCountry'] },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', type: 'date', width: 120 },
    { field: 'ShippedDate', headerText: 'Shipped Date', format: 'yMd', type: 'date', width: 120 },
    { field: 'Freight', headerText: 'Freight',format:'C2', width: 150 },
    { field: 'isVerified', headerText: 'Verified', type: 'boolean', width: 150 },
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
          field: 'isVerified',
          footerTemplate: 'True Count: ${TrueCount}',
        },
      ],
    },
  ],
});
grid.appendTo('#Grid');