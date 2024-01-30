import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Grid, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
  selectionSettings: { type: 'Single' },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
    { field: 'ShipCity', headerText: 'Ship City', width: 150 },
    { field: 'ShipName', headerText: 'Ship Name', width: 150 }
  ],
  height: 315
});
grid.appendTo('#Grid');

let dropdownData = [
  { text: 'Single', value: 'Single' },
  { text: 'Multiple', value: 'Multiple' }];

let dropDownColumn: DropDownList = new DropDownList({
  value: 'Single',
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: valueChange,
});
dropDownColumn.appendTo('#dropdown');

function valueChange(args: ChangeEventArgs) {
  grid.selectionSettings.type = args.value;
}