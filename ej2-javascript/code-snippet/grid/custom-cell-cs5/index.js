var grid = new ej.grids.Grid({
    dataSource: data,
    height: 315,
    dataBound: dataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 },
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 80 }
    ]
});
grid.appendTo('#Grid');

function dataBound() {
    var header = grid.getHeaderContent().querySelector('.e-headercell');
    header.style.backgroundColor = 'red';
    header.style.color = 'white';
    var cell = grid.getCellFromIndex(1, 2);
    cell.style.background = '#f9920b';
    cell.style.color = 'white';
}