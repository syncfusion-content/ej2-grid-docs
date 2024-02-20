import { Switch } from '@syncfusion/ej2-buttons';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { Grid, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Selection)

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
  change: toggleColumnSelection,
  checked: true,
});
toggle.appendTo('#switch');

function toggleColumnSelection()
{
  grid.selectionSettings.enableToggle = toggle.checked;
}

let dropdownData = [
  { text: 'Row', value: 'Row' },
  { text: 'Cell', value: 'Cell' },
  { text: 'Both', value: 'Both' }
];

let dropDownColumn: DropDownList = new DropDownList({
  value: grid.selectionSettings.mode,
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: valueChange,
});
dropDownColumn.appendTo('#dropdown');

function valueChange(args: ChangeEventArgs)
{
  grid.selectionSettings.mode = args.value;
}