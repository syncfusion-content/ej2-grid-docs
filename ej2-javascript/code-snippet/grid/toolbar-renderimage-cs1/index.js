 var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowDeleting: true, allowAdding: true, allowEditing: true },
    toolbarTemplate: '#toolbar-template',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 315
});
grid.appendTo('#Grid');

var addRecordButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#addButton');
document.getElementById('addButton').onclick = function () {
    grid.addRecord();
};
var deleteRecordButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#deleteButton');
document.getElementById('deleteButton').onclick = function () {
    var selectedRecord = grid.getSelectedRecords()[0];
    grid.deleteRecord(selectedRecord );
};