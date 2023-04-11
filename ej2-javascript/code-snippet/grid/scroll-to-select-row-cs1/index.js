var grid = new ej.grids.Grid({
    dataSource: data,
    height: '270',
    width: '100%',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    rowSelected: rowSelected
});
grid.appendTo('#Grid');
var numeric = new  ej.inputs.NumericTextBox({
    width: 200,
    min: 0,
    showSpinButton: false,
    format: 'N',
    placeholder: 'Enter index to select a row',
    change: onchange
}, '#numeric');

function onchange(){
    grid.selectionModule.selectRow(parseInt(numeric.getText(), 10));
}

function rowSelected(args) {
    var rowHeight = grid.getRows()[grid.getSelectedRowIndexes()[0]].scrollHeight;
    grid.getContent().children[0].scrollTop = rowHeight * grid.getSelectedRowIndexes()[0];
}

