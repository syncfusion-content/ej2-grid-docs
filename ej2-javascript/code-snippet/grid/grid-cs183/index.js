ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top', showAddNewRow: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true, number: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 5 } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2', editType:'numericedit', validationRules: { required: true, min: 1 } },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, editType:'dropdownedit' }
    ],
    height: 315
});
grid.appendTo('#Grid');

