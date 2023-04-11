ej.grids.Grid.Inject(ej.grids.ForeignKey);
var grid = new ej.grids.Grid({
    dataSource: data.slice(0,5),
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        {
            field: 'Employee.EmployeeID', foreignKeyField: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData
        },
        { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
        { field: 'ShipName', headerText: 'Ship Name', width: 180 }
    ],
    height: 315
});
grid.appendTo('#Grid');

