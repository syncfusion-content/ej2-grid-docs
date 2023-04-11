var grid = new ej.grids.Grid({
    dataSource: data,
    enablePersistence: true,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 230,
    dataBound: dataBound
});
grid.appendTo('#Grid');

function dataBound(args) {
    var cloned = this.addOnPersist;
    this.addOnPersist = function (key) {
        key = key.filter(function (item) { return item !== "columns"; });
        return cloned.call(this, key);
    };
}

document.getElementById('add').onclick = function () {
    var obj = { field: "Freight", headerText: 'Freight', width: 120 };
    grid.columns.push(obj);
    grid.refreshColumns();
};

document.getElementById('remove').onclick = function () {
    grid.columns.pop();
    grid.refreshColumns();
};

