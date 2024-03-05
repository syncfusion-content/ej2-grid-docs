import { Grid, Aggregate, Page } from "@syncfusion/ej2-grids";
import { data } from "./datasource.ts";

Grid.Inject(Aggregate, Page);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging:true,
  height: 290,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'Freight', headerText: 'Freight', width: 150 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
  ],
  aggregates: [
    {
      columns: [
        {
          type: ['Sum', 'Max', 'Min'],
          field: 'Freight',
          columnName: 'Freight',
          format: 'C2',
          footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}',
        },
      ],
    },
  ],
});
grid.appendTo('#Grid');