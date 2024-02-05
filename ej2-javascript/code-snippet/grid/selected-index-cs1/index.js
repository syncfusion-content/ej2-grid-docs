var grid = new ej.grids.Grid({
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
var columnSelection = false;
var toggle = new ej.buttons.Switch({
    change: onSwitchChange,
    checked: columnSelection 
});
toggle.appendTo('#switch');

function onSwitchChange() {
    grid.selectionSettings.allowColumnSelection = toggle.checked; 
}