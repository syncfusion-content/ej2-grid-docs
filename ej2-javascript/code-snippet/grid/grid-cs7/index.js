var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', type: 'number', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', type: 'date', textAlign: 'Center', format: 'yMd', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', type: 'string', width: 120 },
],
    height: 315
});
grid.appendTo('#Grid');

var alignmentData = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' },
];

var alignmentDropdown = new ej.dropdowns.DropDownList({
    dataSource: alignmentData,
    index: 0,
    width: 100,
    change: changeAlignment,
});
alignmentDropdown.appendTo('#alignmentDropdown');

function changeAlignment(args) {
        grid.columns.forEach(function (col) {
        col.textAlign = args.value;
    });
    grid.refreshColumns();
}