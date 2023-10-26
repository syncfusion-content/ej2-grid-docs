import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Grid, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { mode: 'Cell', type: 'Multiple' },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      {
        field: 'OrderDate',headerText: 'Order Date',width: 130,format: 'yMd',textAlign: 'Right'
      },
      { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
      {
        field: 'ShippedDate',headerText: 'Shipped Date',width: 130,format: 'yMd',textAlign: 'Right'
      },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');

let dropdownData = [
  { text: 'Flow', value: 'Flow' },
  { text: 'Box', value: 'Box' },
  { text: 'BoxWithBorder', value: 'BoxWithBorder' },
];

let dropDownColumn: DropDownList = new DropDownList({
  value: grid.selectionSettings.cellSelectionMode,
  popupHeight: '240px',
  width: 150,
  dataSource: dropdownData,
  change: valueChange,
});
dropDownColumn.appendTo('#dropdown');

function valueChange(args)
{
  grid.selectionSettings.cellSelectionMode = args.value;
}