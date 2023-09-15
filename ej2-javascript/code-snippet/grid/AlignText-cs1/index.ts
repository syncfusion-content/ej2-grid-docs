import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,

  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120 },
    { field: 'CustomerID', headerText: 'Customer Name', width: 150, showInColumnChooser: false },
    { field: 'Freight', width: 120, format: 'C2' },
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd' },
  ]
});
grid.appendTo('#Grid');

let dropdownData = ['Left', 'Right', 'Center', 'Justify'];
let dropDownColumn: DropDownList = new DropDownList({
  value: 'Left',
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: change,
});
dropDownColumn.appendTo('#dropdown');
function change(args) {
  grid.columns.forEach((column) => {
    column.headerTextAlign = args.value
  })
  grid.refreshHeader();
}
