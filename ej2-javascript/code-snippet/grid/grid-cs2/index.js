ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    enableHover: false,
    enableAutoFill: true,
    toolbar: ['Add', 'Update', 'Cancel'],
    selectionSettings: { type: 'Multiple', mode: 'Cell', cellSelectionMode: 'Box' },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, visible: false, width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
     ],
    height: 280
});
grid.appendTo('#Grid');

