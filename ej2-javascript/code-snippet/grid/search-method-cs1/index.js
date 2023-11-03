var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 260
});
grid.appendTo('#Grid');

var searchBtn= new ej.buttons.Button();
searchBtn.appendTo('#search');

document.getElementById('search').addEventListener('click', function() {
    var searchText = document.getElementsByClassName('searchtext')[0].value;
    grid.search(searchText);
});