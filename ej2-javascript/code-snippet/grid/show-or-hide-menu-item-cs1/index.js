var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    allowPaging: true,
    contextMenuItems: ['Copy', 'Edit', 'Delete'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 90, textAlign: 'Right', isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer Name', width: 100 },
        { field: 'Freight', format: 'C2', textAlign: 'Right', editType: 'numericedit', width: 90 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: onSwitchChange,
});
toggle.appendTo('#switch');

function onSwitchChange(args) {
    if (args.checked) {
        grid.contextMenuModule.contextMenu.hideItems([
            'Edit Record',
            'Delete Record',
          ]);
    } else {
        grid.contextMenuModule.contextMenu.showItems([
            'Edit Record',
            'Delete Record',
          ]);
    }
}