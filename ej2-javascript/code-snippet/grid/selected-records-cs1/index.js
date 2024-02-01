ej.grids.Grid.Inject(ej.grids.Page);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowSelection: true,
    pageOptions: { pageSize: 5 },
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right', format: 'C2' }
    ],
    height: 315,
});
grid.appendTo('#Grid');

var message = document.getElementById('message');

var button = new ej.buttons.Button({
    content: 'Selected Records count',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
    selectedRecords = grid.getSelectedRecords().length;
    if (selectedRecords > 0) {
        message.textContent = `Selected record count: ${selectedRecords}`
    }
    else {
        message.textContent = ''
    }
};