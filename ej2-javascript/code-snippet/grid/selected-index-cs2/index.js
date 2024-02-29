var grid = new ej.grids.Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315,
});
grid.appendTo('#Grid');

var message = document.getElementById('message');

var button = new ej.buttons.Button({
    content: 'Get Selected Row Indexes',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
    selectedRowIndexes = grid.getSelectedRowIndexes();
    if (selectedRowIndexes.length > 0) {
        message.textContent = `Selected row indexes: ${selectedRowIndexes}`
    }
    else {
        message.textContent = ''
    }
};