import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

let dropdownData = [
    { text: 'Default', value: 'Default' },
    { text: 'ResetOnRowClick', value: 'ResetOnRowClick' }
  ];
  
let dropDownColumn: DropDownList = new DropDownList({
  index:0,
  width: 150,
  dataSource: dropdownData,
  change: valueChange,
});
dropDownColumn.appendTo('#dropdown');
  
function valueChange(args: ChangeEventArgs)
{
   grid.selectionSettings.checkboxMode = args.value;
}