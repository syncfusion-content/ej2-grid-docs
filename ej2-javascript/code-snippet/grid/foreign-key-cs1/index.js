ej.grids.Grid.Inject(ej.grids.ForeignKey);
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
                { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
                { field: 'ShipName', headerText: 'Ship Name', width: 180 },
                {
                    field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData
                }
            ],
    height: 315
});
grid.appendTo('#Grid');

