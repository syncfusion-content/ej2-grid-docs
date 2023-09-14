import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Switch } from '@syncfusion/ej2-buttons';
import {data} from "./datasource.ts"
Grid.Inject(Page, Selection);

/**
 * Local Data sample
 */

let dropdownData = ['Freight', 'Shipment', 'Cargo'];
let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  allowTextWrap: true,
  textWrapSettings: { wrapMode: 'Header' },

  columns: [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: 120,
      textAlign: 'Right',
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
      width: 120,
      headerTemplate: ` <div id='Freight'></div>`,
    },
    { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 240,
    headerTemplate: 
    `<div><span id='OrderDate'></span>
    <label id='headerText' style='margin-left:8px'>Order Date</label>
    </div>`, },
  ],
  pageSettings: { pageCount: 5 },
});
grid.appendTo('#Grid');
let dropDownColumn: DropDownList = new DropDownList({
  value: 'Freight',
  popupHeight: '200px',
  dataSource: dropdownData,
});
dropDownColumn.appendTo('#Freight');

let headerText = 'order date';
let switchObj: Switch = new Switch({
  change: change,
});
switchObj.appendTo('#OrderDate');

function change(args) {
  headerText = args.checked ? 'Purchase Date' : 'Order Date';
  (document.getElementById('headerText') as HTMLElement).innerHTML = headerText;
}