var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowSelection: true,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID',isPrimaryKey: 'true', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130,format: "yMd", textAlign: 'Right' }
    ],
    height: 315
});
grid.appendTo('#Grid');

var message = document.getElementById('message');
var selectedRecordscount = 0;

var button = new ej.buttons.Button({
    content: 'Selected Records count',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
    selectedRecordscount = grid.getSelectedRecords().length;
    if (selectedRecordscount > 0) {
        message.textContent = `Selected record count: ${selectedRecordscount}`
    }
    else {
        message.textContent = ''
    }
};