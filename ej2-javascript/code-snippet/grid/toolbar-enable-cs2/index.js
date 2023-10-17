ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Group, ej.grids.Sort);
var grid = new ej.grids.Grid({
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
    height: 220,
    toolbarClick: clickHandler
});
grid.appendTo('#Grid');

function clickHandler(args) {
    if (args.item.id === 'Grid_Collapse') { // grid_Collapse is component id + '_' + toolbar item name.
        grid.groupModule.collapseAll();
    }
    if (args.item.id === 'Grid_Expand') {
        grid.groupModule.expandAll();
    }
}

var toggle = new ej.buttons.Switch({
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
