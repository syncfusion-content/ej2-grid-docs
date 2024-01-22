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
          { field: 'CustomerID', direction: 'Ascending' },
          { field: 'ShipName', direction: 'Descending' },
        ],},
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
    ],
});
grid.appendTo('#Grid');
let dropDownColumn: DropDownList = new DropDownList({
    dataSource: [
        { text: 'CustomerID', value: 'CustomerID' },        
        { text: 'OrderID', value: 'OrderID' },
        { text: 'ShipName', value: 'ShipName' },
        { text: 'ShipCity', value: 'ShipCity' },
      ],
      style: 'padding: 26px 0 0 0',
      index: '0',
      width: '120',
      field:{ text: 'text', value: 'value' }  
});
dropDownColumn.appendTo('#dropdownlist1');

let removeSortButton: Button = new Button({ cssClass: 'e-outline' }, '#sort');
(document.getElementById('sort')as HTMLElement).addEventListener('click', function(){
    grid.removeSortColumn(dropDownColumn.value);
});