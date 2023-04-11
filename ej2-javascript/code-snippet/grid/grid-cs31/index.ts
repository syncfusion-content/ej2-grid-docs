

import { Grid, Edit, Toolbar, Page, Column } from '@syncfusion/ej2-grids';
import { purchaseData } from './datasource.ts';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Edit, Toolbar, Page);

let ddElem: HTMLElement;
let multiSelectObj: MultiSelect;
let multiselectDatasource = [
  { ShipCity: 'Reims', Id: '1' },
  { ShipCity: 'Münster', Id: '2' },
  { ShipCity: 'Rio de Janeiro', Id: '3' },
  { ShipCity: 'Lyon', Id: '4' },
  { ShipCity: 'Charleroi', Id: '5' }
];

let grid: Grid = new Grid({
  dataSource: purchaseData,
  allowPaging: true,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', type: 'number', isPrimaryKey: true, validationRules: { required: true }, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 140 },
    { field: 'Freight', headerText: 'Freight', type: 'number', editType: 'numericedit', format: 'C2', textAlign: 'Right', width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', type: 'string', width: 180, edit: {
        create: createShipCityFn,
        read: readShipCityFn,
        destroy: destroyShipCityFn,
        write: writeShipCityFn }
    }
  ],
  pageSettings: { pageSize: 7 },
  height: 255,
});
grid.appendTo('#Grid');

function createShipCityFn() {
  ddElem = document.createElement('input');
  return ddElem;
}
function readShipCityFn() {
  return multiSelectObj.value.join(',');
}
function destroyShipCityFn() {
  multiSelectObj.destroy();
}
function writeShipCityFn(args) {
  {
    let multiSelectVal = args.rowData[args.column.field]
      ? args.rowData[args.column.field].split(',')
      : [];
    multiSelectObj = new MultiSelect({
      value: multiSelectVal,
      dataSource: multiselectDatasource,
      fields: { value: 'ShipCity', text: 'ShipCity' },
      floatLabelType: 'Never',
      mode: 'Box'
    });
    multiSelectObj.appendTo(ddElem);
  }
}



