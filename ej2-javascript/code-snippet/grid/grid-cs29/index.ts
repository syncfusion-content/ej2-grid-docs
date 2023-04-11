

import { Grid, Edit, Toolbar, Page, Column } from '@syncfusion/ej2-grids';
import { purchaseData } from './datasource.ts';
import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

Grid.Inject(Edit, Toolbar, Page);

let ddElem: HTMLElement;
let timeObject: TimePicker;

let grid: Grid = new Grid({
  dataSource: purchaseData,
  allowPaging: true,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', type: 'number', isPrimaryKey: true, validationRules: { required: true }, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 140 },
    { field: 'Freight', headerText: 'Freight', type: 'number', editType: 'numericedit', format: 'C2',textAlign: 'Right', width: 120 },
    { field: 'OrderDate', headerText: 'Order Date', type: 'date', format: 'hh:mm', width: 150, edit: {
        create: createOrderDateFn,
        destroy: destroyOrderDateFn,
        read: readOrderDateFn,
        write: writeOrderDateFn }
    }
  ],
  pageSettings: { pageSize: 7 },
  height: 255,
});
grid.appendTo('#Grid');

function createOrderDateFn() {
  ddElem = document.createElement('input');
  return ddElem;
}
function destroyOrderDateFn() {
  timeObject.destroy();
}
function readOrderDateFn() {
  return timeObject.value;
}
function writeOrderDateFn(args) {
  enableRipple(true);
  timeObject = new TimePicker({
    value: args.rowData[args.column.field],
    step: 60
  });
  timeObject.appendTo(ddElem);
}



