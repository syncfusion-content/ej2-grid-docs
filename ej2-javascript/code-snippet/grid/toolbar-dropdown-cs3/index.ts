import { Grid, Toolbar, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

var dropdowndata = [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }];

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

let dropDownListObject: DropDownList = new DropDownList({
    dataSource: dropdowndata,
    change: onChange,
    popupHeight: 200,
    placeholder: 'select a value',
});
dropDownListObject.appendTo('#dropdownelement');


function onChange(args: ChangeEventArgs): void {
  let drop= document.getElementById('dropdownelement')as HTMLInputElement;
  let selectedRow = grid.getSelectedRecords()[0];

  if (args.value === 'Update') {
    grid.endEdit();
    drop.value  = '';
    drop.placeholder = args.itemData.text;
  }
  if (args.value === 'Edit') {
    grid.startEdit();
    drop.value = '';
    drop.placeholder = args.itemData.text;
  }
  if (args.value === 'Delete') {
    grid.deleteRecord(selectedRow);
    drop.value = '';
    drop.placeholder = args.itemData.text;
  }
}