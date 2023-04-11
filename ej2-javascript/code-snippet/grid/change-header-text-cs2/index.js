var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var btn = new ej.buttons.Button({ cssClass: 'e-flat' }, '#change-text');

document.getElementById('change-text').addEventListener('click', () => { // changing the header text for ShipCity column.
    var column = grid.getColumnByField("ShipCity"); // get the JSON object of the column corresponding to the field name.
    column.headerText = "Changed Text"; // assign a new header text to the column.
    grid.refreshHeader();
});

