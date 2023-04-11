var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey:true  },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 230
});
grid.appendTo('#Grid');

document.getElementById('add').onclick = function () {
    grid.addRecord({ "OrderID": "10248", "CustomerID": "RTER", "ShipCity": "America", "ShipName": "Hanari" });
};
document.getElementById('edit').onclick = function () {
    grid.startEdit();
};
document.getElementById('delete').onclick = function () {
    grid.deleteRecord();
};
document.getElementById('updaterow').onclick = function () {
    grid.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari' });
};
document.getElementById('updatecell').onclick = function () {
    grid.setCellValue(grid.currentViewData[0].OrderID, 'CustomerID', 'Value Changed');
};

