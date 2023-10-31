ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 90 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 120 }
    ]
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: onToggleCaseSensitive,
});
toggle.appendTo('#switch');

function onToggleCaseSensitive(args) {
    if (args.checked) {
        grid.filterSettings.enableCaseSensitivity = true;
    } else {
        grid.filterSettings.enableCaseSensitivity  = false;
    }
}