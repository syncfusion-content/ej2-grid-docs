import { Button } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Grid, Resize } from '@syncfusion/ej2-grids';
import { TextBox } from '@syncfusion/ej2-inputs';
import { data } from './data-source.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
  dataSource: data,
  allowResizing: true,
  height: 315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120},
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'Freight',headerText: 'Freight', width: 80}
  ]
});
grid.appendTo('#Grid');

let dropDownColumn: DropDownList = new DropDownList({
  dataSource: [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'ShipCountry', value: 'ShipCountry' }
  ],
  value: 'OrderID',
  popupHeight: '240px',
  width: '120px'
});
dropDownColumn.appendTo('#dropdownlist');

let textbox: TextBox = new TextBox({
  placeholder: 'Enter new width',
  width: 140,
});
textbox.appendTo('#textboxvalue');

let button: Button = new Button({
  content: 'Resize',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  grid.getColumnByField(dropDownColumn.value).width = textbox.element.value;
  grid.refreshColumns();
};