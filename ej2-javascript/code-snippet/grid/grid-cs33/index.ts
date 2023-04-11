

import { Grid, Edit, Page, Column, Toolbar } from '@syncfusion/ej2-grids';
import {  RichTextEditor, Link, Toolbar as RTEToolbar, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { purchaseData } from './datasource.ts';
RichTextEditor.Inject(Link, RTEToolbar , Image, HtmlEditor, QuickToolbar);
Grid.Inject(Edit, Toolbar, Page);

let rteElement: HTMLElement;
let richtextEditor: RichTextEditor;
let grid: Grid = new Grid({
  dataSource: purchaseData,
  allowPaging: true,
  allowTextWrap: true,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  created: function (args) {
    this.keyConfigs.enter = '';
  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', type: 'number', isPrimaryKey: true, validationRules: { required: true }, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 140 },
    { field: 'Freight', headerText: 'Freight', type: 'number', editType: 'numericedit', format: 'C2', textAlign: 'Right', width: 120 },
    { field: 'ShipAddress', headerText: 'Ship Address', type: 'string', valueAccessor: valueAccessor, disableHtmlEncode: false, width: 180, edit: {
        create: createShipAddressFn,
        read: readShipAddressFn,
        write: writeShipAddressFn,
        destroy: destroyShipAddressFn }
    }
  ],
  pageSettings: { pageSize: 7 },
  height: 255,
});
grid.appendTo('#Grid');
function createShipAddressFn() {
  rteElement = document.createElement('textarea');
  return rteElement;
}
function readShipAddressFn() {
  return richtextEditor.value;
}
function writeShipAddressFn(args) {
    richtextEditor = new RichTextEditor({
      value: args.rowData[args.column.field],
    });
    richtextEditor.appendTo(rteElement);
}
function destroyShipAddressFn() {
  richtextEditor.destroy();
}
function valueAccessor(field, data, column) {
  var value = data[field];
  if (value != undefined) {
    return value.split('\n').join('<br>');
  } else {
    return '';
  }
}



