import { Grid } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
    columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120 },
    { field: 'CustomerID', headerText: 'Customer Name', width: 150, showInColumnChooser: false },
    { field: 'Freight', format: 'C2', width: 120 },
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd' },
  ],
  height: 315
});
grid.appendTo('#Grid');

let dropdownData = ['Left', 'Right', 'Center', 'Justify'];
let dropDownColumn: DropDownList = new DropDownList({
  value: 'Left',
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: changeAlignment,
});
dropDownColumn.appendTo('#dropdown');
function changeAlignment(args) {
  grid.columns.forEach((column) => {
    column.headerTextAlign = args.value
  })
  grid.refreshHeader();
}