import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  selectionSettings: { mode: 'Cell', type: 'Multiple' },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 },
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

function valueChange(args: ChangeEventArgs)
{
  grid.selectionSettings.cellSelectionMode = args.value;
}