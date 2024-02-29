ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add','Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right',validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID',validationRules: { required: true },width: 120  },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2',validationRules: { min: 1, max: 1000 } },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 273
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: toggleShowConfirmDialog,
    checked: true,
});
toggle.appendTo('#switch');

function toggleShowConfirmDialog()
{
   grid.editSettings.showConfirmDialog = toggle.checked;
}

var toggleDelete = new ej.buttons.Switch({
    change: toggleShowDeleteConfirmDialog,
});
toggleDelete.appendTo('#switchDelete');

function toggleShowDeleteConfirmDialog()
{
    grid.editSettings.showDeleteConfirmDialog = toggleDelete.checked;
}