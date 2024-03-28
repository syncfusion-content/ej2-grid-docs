ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: {  allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right',validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID',validationRules: { required: true }, width: 120 },
        { field: 'Freight', headerText: 'Freight',editType: 'numericedit', textAlign: 'Right', width: 120,validationRules: { required: true ,number: true }, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country',validationRules: { required: true },editType: 'dropdownedit', width: 150 }
    ],
    height: 273
});
grid.appendTo('#Grid');