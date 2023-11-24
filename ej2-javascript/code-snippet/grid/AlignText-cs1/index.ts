import { Grid,ChangeEventArgs, ColumnModel } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
  dataSource: data,
    columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120 },
    { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
    { field: 'Freight', headerText: 'Freight',format: 'C2', width: 120 },
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
function changeAlignment(args: ChangeEventArgs) {
  grid.columns.forEach((column: ColumnModel) => {
    column.headerTextAlign = args.value
  })
  grid.refreshHeader();
}