import { DropDownList,ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'Freight', headerText: 'Freight', width: 80 }
  ]
});
grid.appendTo('#Grid');

let dropDownColumn: DropDownList = new DropDownList({
  dataSource: [
    { text: 'Normal', value: 'Normal' },
    { text: 'Auto', value: 'Auto' }
  ],
  popupHeight: '240px',
  width: '120px',
  value: 'Normal',
  change: valueChange,
});
dropDownColumn.appendTo('#dropdownlist');

function valueChange(args: ChangeEventArgs) {
  grid.resizeSettings.mode = args.value;
}