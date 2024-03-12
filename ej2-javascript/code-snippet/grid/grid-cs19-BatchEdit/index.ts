import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Grid, Edit, Toolbar,EditSettingsModel } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
  dataSource: data,
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
  allowPaging: true,
  toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
  columns: [
      { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, width: 100 },
      { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 120 },
      { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2', validationRules: { min: 1, max: 1000 } },
      { field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd', width: 130 },
      { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150, edit: { params: { popupHeight: '300px' } } }
  ],
  height: 240
});
grid.appendTo('#Grid');

let dropdownData = [
  { text: 'Top', value: 'Top' },
  { text: 'Bottom', value: 'Bottom' }
];

let dropDown: DropDownList = new DropDownList({
  value: 'Top',
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: change,
});
dropDown.appendTo('#dropdown');

function change(args: ChangeEventArgs) {
  (grid.editSettings as EditSettingsModel).newRowPosition = args.value;
}