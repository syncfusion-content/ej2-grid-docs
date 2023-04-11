var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
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

