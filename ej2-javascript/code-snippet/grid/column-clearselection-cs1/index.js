var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging:true,
    pageSettings:{pageSize:5},
    selectionSettings: { allowColumnSelection: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2'} 
    ],
});
grid.appendTo('#Grid');

var button = new ej.buttons.Button({
    content: 'Clear Column Selection',
});
button.appendTo('#buttons');

document.getElementById('buttons').onclick = function () {
    grid.selectionModule.clearColumnSelection()
};