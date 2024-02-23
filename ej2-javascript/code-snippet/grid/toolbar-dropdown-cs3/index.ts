import { Grid, Toolbar, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

let dropdowndata = [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }];

Grid.Inject(Toolbar, Edit);

let grid: Grid = new Grid({
    dataSource: data,
    toolbarTemplate: '#toolbar-template',
    editSettings: { allowDeleting: true, allowAdding: true, allowEditing: true },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
      { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 200
});
grid.appendTo('#Grid');

let dropDownList: DropDownList = new DropDownList({
    dataSource: dropdowndata,
    change: onChange,
    placeholder: 'select a value',
    width: 180
});
dropDownList.appendTo('#dropdownelement');


function onChange(args: ChangeEventArgs): void {

  let selectedRow = grid.getSelectedRecords()[0];

  if (args.itemData.text === 'Update') {
    grid.endEdit();
  }
  if (args.itemData.text === 'Edit') {
    grid.startEdit();
  }
  if (args.itemData.text === 'Delete') {
    grid.deleteRecord(selectedRow);
  }
  dropDown.value = '';
  dropDown.placeholder = args.itemData.text;
}