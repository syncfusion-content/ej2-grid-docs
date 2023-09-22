import { Switch } from '@syncfusion/ej2-buttons';
import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { showDropArea: true, columns: ['CustomerID', 'ShipCity'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 267
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: onSwitchChange,
    checked: true,
  });
  toggle.appendTo('#switch');

function onSwitchChange(args)
{
    if (args.checked) {
        grid.groupSettings.showDropArea = true;
      } else {
        grid.groupSettings.showDropArea = false;
      }
}