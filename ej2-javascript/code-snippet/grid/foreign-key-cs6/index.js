ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Edit, ej.grids.Toolbar, ej.grids.ForeignKey);
var grid = new ej.grids.Grid({
    dataSource: orderDetails,
    allowPaging: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right',  isPrimaryKey: true, width: 100 },
            {
                field: 'CustomerID', foreignKeyField: 'CustomerID', foreignKeyValue: 'ContactName', dataSource: customerData,
                width: 150, headerText: 'Customer Name', validationRules: { required: true }
            },
            { field: 'Freight', headerText: 'Freight', editType: 'numericedit', width: 100, textAlign: 'Right', format: 'C2'},
            {
                field: 'EmployeeID', foreignKeyField: 'EmployeeID', foreignKeyValue: 'City', dataSource: employeeData,
                width: 150, headerText: 'Ship City', validationRules: { required: true }
            },

            { field: 'ShipName', headerText: 'Ship Name', editType: 'dropdownedit', width: 180 }
        ],
        height: 315
    });
grid.appendTo('#Grid');

