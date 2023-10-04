import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    pageSettings: { pageSizes: true,pageCount: 5},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, allowEditing: false, width: 140 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2',validationRules: { min:1, max:1000 } },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

let dropdownData = [ 
   { text: 'Top', value: 'Top' },
{ text: 'Bottom', value: 'Bottom' }
];
let dropDown: DropDownList = new DropDownList({
  value: 'Top',
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: change,
});
dropDown.appendTo('#dropdown');

function change(args)
{
        grid.editSettings.newRowPosition = args.value;
}