import { Grid } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Switch } from '@syncfusion/ej2-buttons';
import { data } from "./datasource.ts"

let dropdownData = ['Freight', 'Shipment', 'Cargo'];
let grid: Grid = new Grid({
  dataSource: data,
  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 120,
    },
    {
      field: 'CustomerID',
      headerText: 'Customer ID',
      headerTemplate: ` <div> <span class="e-icon-userlogin e-icons employee"></span> Customer ID</div>`,
      width: 140,
    },
    {
      field: 'Freight',
      headerText: 'Freight',
      headerTemplate: ` <div id='Freight'></div>`,
      width: 120,
    },
    {
      field: 'OrderDate', headerText: 'Order Date', format: 'yMd',
      headerTemplate:
        `<div><span id='OrderDate'></span>
    <label id='headerText' style='margin-left:8px'>Order Date</label>
    </div>`,
      width: 200,
    },
  ],
  height: 315
});
grid.appendTo('#Grid');
let dropDownColumn: DropDownList = new DropDownList({
  value: 'Freight',
  popupHeight: '200px',
  dataSource: dropdownData,
});
dropDownColumn.appendTo('#Freight');

let headerText = 'order date';
let toggleButton: Switch = new Switch({
  change: onSwitchToggle,
});
toggleButton.appendTo('#OrderDate');

function onSwitchToggle(args) {
  headerText = args.checked ? 'Purchase Date' : 'Order Date';
  (document.getElementById('headerText') as HTMLElement).innerHTML = headerText;
}