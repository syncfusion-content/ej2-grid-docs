import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';
import { TextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,

  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150},
    { field: 'Freight', width: 120, format: 'C2'},
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd' },
  ]
});
grid.appendTo('#Grid');
var dropDownColumn: DropDownList = new DropDownList({
  dataSource: [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'OrderDate', value: 'OrderDate' },
  ],
  value: 'OrderID',
  popupHeight: '240px',
  width: '120px',
});
dropDownColumn.appendTo('#dropdownlist');

var textbox: TextBox = new TextBox({
  placeholder: 'Enter new header text',
  width: 140,
});
textbox.appendTo('#textboxvalue');

var button: Button = new Button({
  content: 'Click',
});
button.appendTo('#buttons');

(document.getElementById('buttons') as HTMLElement).onclick = function () {
  if (textbox.value.trim() !== '') {
    let column = grid.getColumnByField((dropDownColumn as any).value);

    column.headerText = textbox.value;
    grid.refreshHeader();
  }
};

