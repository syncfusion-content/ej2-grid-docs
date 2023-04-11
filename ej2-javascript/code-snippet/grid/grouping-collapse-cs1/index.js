ej.grids.Grid.Inject(ej.grids.Group, ej.grids.Filter, ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCity'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 240
});
grid.appendTo('#Grid');

var collapse = new ej.buttons.Button({ cssClass: 'e-flat' }, '#collapse');

document.getElementById('collapse').addEventListener('click', function() {
    if (grid.getSelectedRowIndexes().length) {
        var currentTr = grid.getRows()[grid.getSelectedRowIndexes()[0]];
        while (currentTr.classList && currentTr.classList.length) {
            currentTr = currentTr.previousSibling;
        }
        var collapseElement = currentTr.querySelector('.e-recordplusexpand');
        grid.groupModule.expandCollapseRows(collapseElement); //Pass the collapse row element.
    }
});


