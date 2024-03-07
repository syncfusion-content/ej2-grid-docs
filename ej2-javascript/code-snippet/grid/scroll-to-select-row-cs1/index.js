var grid = new ej.grids.Grid({
    dataSource: data,
    height: 315,
    width: '100%',
    rowSelected: rowSelected,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 }
    ]
});
grid.appendTo('#Grid');

var dropDownData = [
    { text: 'Select count' },
    { text: '10', value: '10' },
    { text: '20', value: '20' },
    { text: '30', value: '30' },
    { text: '80', value: '80' },
    { text: '100', value: '100' },
    { text: '200', value: '200' },
    { text: '232', value: '232' },
    { text: '300', value: '300' },
    { text: '500', value: '500' },
    { text: '800', value: '800' },
    { text: '820', value: '850' },
    { text: '920', value: '920' },
    { text: '2020', value: '2020' },
    { text: '3000', value: '3000' },
    { text: '4000', value: '4000' },
    { text: '4999', value: '4999' }
];

var dropdown = new ej.dropdowns.DropDownList({
    value: 'Select count',
    popupHeight: '240px',
    width: 120,
    dataSource: dropDownData,
    change: valueChange
});
dropdown.appendTo('#dropdowns');

function valueChange(args) {
    grid.selectionModule.selectRow(parseInt(args.value, 10));
}

function rowSelected() {
    var rowHeight = grid.getRows()[grid.getSelectedRowIndexes()[0]].scrollHeight;
    grid.getContent().children[0].scrollTop = rowHeight * grid.getSelectedRowIndexes()[0];
}