var grid = new ej.grids.Grid({
    dataSource: data,
    allowSelection: true,
    selectionSettings: { type: 'Multiple' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var copyButton = new ej.buttons.Button({ cssClass: "e-outline"});
copyButton.appendTo('#copy');

document.getElementById('copy').addEventListener('click', function(){
    grid.copy();
});

var copyHeaderButton = new ej.buttons.Button({ cssClass: "e-outline"});
copyHeaderButton.appendTo('#copyHeader');

document.getElementById('copyHeader').addEventListener('click', function(){
    grid.copy(true);
});

