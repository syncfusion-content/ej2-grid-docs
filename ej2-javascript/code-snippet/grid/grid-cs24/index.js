ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', validationRules: { required: true }, visible: false, width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', validationRules: { min: 1, max: 1000 }, format: 'C2', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 273,
    actionBegin: function (args) {
        if (args.requestType === 'beginEdit') {
            for (var i = 0; i < columns.length; i++) {
                if (columns[i].field == "CustomerID") {
                    columns[i].visible = true;
                }
                else if (columns[i].field == "ShipCountry") {
                    columns[i].visible = false;
                }
            }
        }
        else if (args.requestType === 'add') {
            for (var i = 0; i < columns.length; i++) {
                if (columns[i].field == "CustomerID") {
                    columns[i].visible = true;
                }

            }
        }
        else if (args.requestType === 'save') {
            for (var i = 0; i < columns.length; i++) {
                if (columns[i].field == "CustomerID") {
                    columns[i].visible = false;
                }
                else if (columns[i].field == "ShipCountry") {
                    columns[i].visible = true;
                }
            }
        }
    }
});
grid.appendTo('#Grid');