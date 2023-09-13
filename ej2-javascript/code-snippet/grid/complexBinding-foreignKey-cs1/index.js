var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'Employee.EmployeeID', headerText: 'Employee Name', width: 120,foreignKeyValue:'FirstName', foreignKeyField:'EmployeeID' ,dataSource:employeeData },
        { field: 'Freight', headerText: 'Freight', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

