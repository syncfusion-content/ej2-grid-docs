ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Selection);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSelection: true,
    allowPaging: true,
    selectionSettings: { type: 'Multiple', persistSelection: true },
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
    ],
    pageSettings: { pageSizes: true, pageSize: 5 }
});
grid.appendTo('#Grid');

var btn = new ej.buttons.Button({ cssClass: 'e-flat' }, '#show');
document.getElementById('show').onclick = () => {
    var selectedrecords = grid.getSelectedRecords();
    var selectedRecordsCount = selectedrecords.length;
    alert(selectedRecordsCount);
}

