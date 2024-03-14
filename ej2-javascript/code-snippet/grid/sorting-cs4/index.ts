import { Grid, Sort } from '@syncfusion/ej2-grids';
import { data} from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Sort);

let grid: Grid = new Grid({
    dataSource: data,
    allowSorting: true,
    sortSettings:{
        columns: [
          { field: 'ShipName', direction: 'Ascending' },
        ],},
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 80, format:'C2', textAlign:'Right' }
    ],
});
grid.appendTo('#Grid');
let dropDownColumn: DropDownList = new DropDownList({
    dataSource: [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
      ],
      style: 'padding: 26px 0 0 0',
      index: '0',
      width: '120',
      fields:{ text: 'text', value: 'value' }  
});
dropDownColumn.appendTo('#dropdownlist1');

let dropDownDirection: DropDownList = new DropDownList({
    dataSource: [
        { text: 'Ascending', value: 'Ascending' },
        { text: 'Descending', value: 'Descending' },
      ],
      style: 'padding: 26px 0 0 0',
      index: '0',
      width: '120',
});
dropDownDirection.appendTo('#dropdownlist2');
let sortButton: Button = new Button({ cssClass: 'e-outline' }, '#sort');
(document.getElementById('sort')as HTMLElement).addEventListener('click', function(){
    grid.sortColumn(dropDownColumn.value, dropDownDirection.value, true)
});