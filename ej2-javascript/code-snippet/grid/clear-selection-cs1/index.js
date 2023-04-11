ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Selection);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSelection: true,
    allowPaging: true,
    selectionSettings: { type: 'Multiple' },
    selectedRowIndex: 2,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
    ],
    pageSettings: { pageSizes: true, pageSize: 5 }
});
grid.appendTo('#Grid');

var btn = new ej.buttons.Button({ cssClass: 'e-flat' }, '#show');
document.getElementById('show').onclick = () => {
    grid.clearSelection();
}

