var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var show = new ej.buttons.Button({ cssClass: 'e-info' }, '#show');
var hide = new ej.buttons.Button({ cssClass: 'e-info' }, '#hide');

document.getElementById('show').onclick = function() {
    grid.showColumns('CustomerID', 'field'); //show by field
};

document.getElementById('hide').onclick = function() {
    grid.hideColumns('CustomerID', 'field'); //hide by field
};

