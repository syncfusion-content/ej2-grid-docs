import { Grid, Page } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';
import { TextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(Page);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,

  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: 120,headerValueAccessor: headerValueAccessor  },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150,headerValueAccessor: headerValueAccessor },
    { field: 'Freight', width: 120, format: 'C2',headerValueAccessor: headerValueAccessor },
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd',headerValueAccessor: headerValueAccessor },
  ]
});
grid.appendTo('#Grid');

let dropDownColumn: DropDownList = new DropDownList({
  dataSource: [
    { text: 'OrderID', value: 'OrderID'},
    { text: 'CustomerID', value: 'CustomerID'},
    { text: 'Freight', value: 'Freight'},
    { text: 'OrderDate', value: 'OrderDate'},
  ],
  value: 'OrderID',
  popupHeight: '240px',
  width: '120px',
});
dropDownColumn.appendTo('#dropdownlist');

let textbox: TextBox = new TextBox({
  placeholder: 'Enter new header text',
  width: 140,
});
textbox.appendTo('#textboxvalue');

let button: Button = new Button({
  content: 'Click',
});
button.appendTo('#buttons');

function headerValueAccessor(field,columns)
{
    if (textbox && textbox.value && textbox.value.trim() !== ''&& columns.field === dropDownColumn.value)
    {
        columns.headerText = textbox.value;
      }
}

(<HTMLElement>document.getElementById('buttons')).onclick = function () {
  grid.refreshHeader();
};
