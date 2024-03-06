var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
    ]
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: toggleStickyHeader,
});
toggle.appendTo('#switch');

function toggleStickyHeader(args) {
    grid.enableStickyHeader = args.checked;
}