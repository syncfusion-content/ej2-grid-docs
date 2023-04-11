var grid = new ej.grids.Grid({
    dataSource: data,
    height: 315,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Normal',
    },
    allowSelection: false,
    enableHover: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 120,
          isFrozen: true },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120,
        validationRules: { required: true }},
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 170 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, isFrozen: true },
        { field: 'Freight', headerText: 'Freight', width: 120, validationRules: { required: true } }
    ],
    actionComplete: (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 });
            args.movableForm.ej2_instances[0].addRules('EmployeeID', { max: 20 });
        }
    }
});
grid.appendTo('#Grid');

