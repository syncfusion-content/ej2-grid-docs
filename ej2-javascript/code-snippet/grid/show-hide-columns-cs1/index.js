var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd',width: 120 }
    ],
    height: 280
});
grid.appendTo('#Grid');

var show = new ej.buttons.Button({ cssClass: 'e-info' }, '#show');
var hide = new ej.buttons.Button({ cssClass: 'e-info' }, '#hide');

document.getElementById('show').onclick = function() {
    grid.showColumns('Customer ID', 'headerText'); //show by HeaderText
};

document.getElementById('hide').onclick = function() {
    grid.hideColumns('Customer ID', 'headerText'); //hide by HeaderText
};

