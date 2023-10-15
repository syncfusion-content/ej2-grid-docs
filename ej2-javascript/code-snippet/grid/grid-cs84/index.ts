import { Button } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Grid, Group, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group, Sort);

let grid: Grid = new Grid({
  dataSource: data.slice(0, 10),
  allowGrouping: true,
  allowSorting: true,
  groupSettings: { showDropArea: false, columns: ['CustomerID', 'ShipName'] },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    { field: 'ShipName', headerText: 'Ship Name', width: 120 },
  ],
  height: 267,
});
grid.appendTo('#Grid');

let columns = [
  { text: 'CustomerID', value: 'CustomerID' },
  { text: 'OrderID', value: 'OrderID' },
  { text: 'ShipCity', value: 'ShipCity' },
  { text: 'ShipName', value: 'ShipName' },
];

let fields:Object = { text: 'text', value: 'value' };

let dropdown: DropDownList = new DropDownList({
  value: 'OrderID',
  popupHeight: '240px',
  width: 120,
  dataSource: columns,
  fields: fields,
});
dropdown.appendTo('#dropdowns');

let button: Button = new Button({
    content: 'Group Column',
})
button.appendTo('#group');

(document.getElementById('group') as HTMLElement).onclick=function()
{
    grid.groupColumn((dropdown as DropDownList).value);
}

let button1: Button = new Button({
    content: 'Ungroup Column',
})
button1.appendTo('#ungroup')


(document.getElementById('ungroup')  as HTMLElement).onclick=function()
{
    grid.ungroupColumn((dropdown as DropDownList).value);
}