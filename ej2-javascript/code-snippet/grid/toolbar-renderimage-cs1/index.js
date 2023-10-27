var clickHandler = function (args) {
    var target = args.originalEvent.target.closest('.e-toolbar-item');
    if (target.id === 'addRecords') {
        grid.addRecord();
    } 
     if (target.id === 'deleteRecords') {
        var selectedRecord = grid.getSelectedRecords()[0];
        grid.deleteRecord(selectedRecord );
    } 
  };
  var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowDeleting: true, allowAdding: true, allowEditing: true },
    toolbarTemplate: '#toolbar-template',
    toolbarClick: clickHandler,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 315
});
grid.appendTo('#Grid');