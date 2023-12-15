import { Grid, Toolbar, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Switch } from '@syncfusion/ej2-buttons';

Grid.Inject(Toolbar, Group);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Expand', 'Collapse'],
    allowGrouping: true,
    groupSettings: { columns: ['CustomerID'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
      ],
    height: 200,
    toolbarClick: clickHandler
});
grid.appendTo('#Grid');

function clickHandler(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_Collapse') { // grid_Collapse is component id + '_' + toolbar item name.
        grid.groupModule.collapseAll();
    }
    if (args.item.id === 'Grid_Expand') {
        grid.groupModule.expandAll();
    }
}

let toggle: Switch = new Switch({
    change: onSwitchChange,
  });
  toggle.appendTo('#switch');

function onSwitchChange(args)
{
    if (args.checked) {
        grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false); // Disable toolbar items.
    } else {
       grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true); //  // Enable toolbar items.
    }
}