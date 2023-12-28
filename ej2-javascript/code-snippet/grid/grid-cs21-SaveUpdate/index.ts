import { Grid, Edit, Toolbar,Page  } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar,Page );

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  cellSaved: save,
  pageSettings: { pageCount: 5 },
  toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, showConfirmDialog:false, mode: 'Batch'},
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true }, width: 140},
    { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, width: 140},
    { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right', validationRules: { min: 1, max: 1000 }, editType: 'numericedit',width: 140},
    { field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: { type: 'dateTime', format: 'M/d/y hh:mm a' },width: 120},
    { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', edit: { popupHeight: '300px' },width: 150},
  ],
  height: 272,
});
grid.appendTo('#Grid');

function save() {
  grid.editModule.batchSave();
}