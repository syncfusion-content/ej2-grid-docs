var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, textAlign: 'Right', format:'yMd' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'Freight', headerText: 'Receipt Amount', width: 150, template:'#template' }
    ],
    height: 315,
    created: () => {
        grid.element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
            if (e.target.classList.contains('custemp')) { // Based on this condition, you can find whether the target is an input element or not.
                var row = ej.grids.parentsUntil(e.target, 'e-row');
                var rowIndex = row.rowIndex; // Get the row index.
                var uid = row.getAttribute('data-uid');
                var rowData = grid.getRowObjectFromUID(uid).data; // Get the row data.
                rowData.Freight = e.target.value; // Update the new value for the corresponding column.
                grid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
            }
        });
    }
});
grid.appendTo('#Grid');

