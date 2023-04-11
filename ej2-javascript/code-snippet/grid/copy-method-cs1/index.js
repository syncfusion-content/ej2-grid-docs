var grid = new ej.grids.Grid({
    dataSource: data,
    allowSelection: true,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var copyBtn = new ej.buttons.Button();
copyBtn.appendTo('#copy');

document.getElementById('copy').addEventListener('click', function(){
    grid.copy();
});

var copyHeaderBtn = new ej.buttons.Button();
copyHeaderBtn.appendTo('#copyHeader');

document.getElementById('copyHeader').addEventListener('click', function(){
    grid.copy(true);
});

