ej.grids.Grid.Inject(ej.grids.ForeignKey, ej.grids.Edit, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
            dataSource: data.slice(0,10),
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
                {
                    field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData,
                },
                { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
                { field: 'ShipName', headerText: 'Ship Name', width: 180 }
            ],
            height: 280,
        });
grid.appendTo('#Grid');


