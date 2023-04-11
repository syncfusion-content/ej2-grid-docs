var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 280
});
grid.appendTo('#Grid');

var add = new ej.buttons.Button({}, '#add');
var dele = new ej.buttons.Button({}, '#delete');

document.getElementById('add').onclick = function(){
    var data = { OrderID: 10247, CustomerID: "ASDFG", Freight: 40.4, OrderDate: new Date(8367642e5) };
    (grid.dataSource).unshift(data); // add new record.
    grid.refresh(); // refresh the Grid.
};

document.getElementById('delete').onclick = function() {
    if (grid.getSelectedRowIndexes().length) {
        var selectedRow = grid.getSelectedRowIndexes()[0];
        (grid.dataSource).splice(selectedRow, 1); // delete the selected record.
    } else {
        alert("No records selected for delete operation");
    }
    grid.refresh(); // refresh the Grid.
};


