var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings:{ allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar:['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    selectionSettings:{type: 'Multiple'},
    allowGrouping: true,
    keyPressed:keyPressed,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey:true, width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

function keyPressed(e) {
    var key = e.key.toLowerCase();
    switch (key) {
        case 'n':
            e.preventDefault();
            grid.addRecord();
            break;
        case 's':
            if (e.ctrlKey) {
                e.preventDefault();
                grid.endEdit();
            }
            break;
        case 'd':
            if (e.ctrlKey) {
                e.preventDefault();
                grid.deleteRecord();
            }
            break;
        case 'a':
            if (e.ctrlKey) {
                e.preventDefault();
                grid.selectRowsByRange(0);
            }
            break;
        case 'g':
            if (e.ctrlKey) {
                e.preventDefault();
                grid.groupColumn('CustomerID');
            }
            break;
        case 'enter':
            e.preventDefault();
            e.cancel = true;
            grid.refreshColumns();
            break;
        case 'insert':
            e.preventDefault();
            e.cancel = true;
            break;
        case 'delete':
            e.preventDefault();
            e.cancel = true;
            break;
        case 'f2':
            e.preventDefault();
            e.cancel = true;
            break;
        case '" "':
            if (e.ctrlKey) {
                e.preventDefault();
                e.cancel = true;
            }
            break;
        // Add more custom shortcuts as needed
    }
}