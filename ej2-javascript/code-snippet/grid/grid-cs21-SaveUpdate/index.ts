import { Grid, Edit, Toolbar,Page,EditSettingsModel  } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar,Page );

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  pageSetting: {pageCount: 5},
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, showConfirmDialog:false, mode: 'Batch'},
  toolbar: ['Add', 'Delete'],
  cellSaved: save,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true, number: true } },
      { field: 'CustomerID', headerText: 'Customer ID', width: 140, validationRules: { required: true }},
      { field: 'Freight', headerText: 'Freight', width: 140, format: 'C2', textAlign: 'Right',validationRules: { min:1, max:1000 },editType: 'numericedit'},
      { field: 'OrderDate', headerText: 'Order Date', width: 120, editType: 'datepickeredit', format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, textAlign: 'Right'},
      { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType: 'dropdownedit',edit:{ popupHeight: '300px' } },
  ],
  height: 272
});
grid.appendTo('#Grid');

function save() {
  (grid.editModule as EditSettingsModel).batchSave();
}