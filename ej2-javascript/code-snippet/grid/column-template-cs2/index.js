var grid = new ej.grids.Grid({
    dataSource: employeeData,
    columns: [
        {
            headerText: 'Employee Image', textAlign: 'Center',
            template: '#template', width: 150
        },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 }
    ],
    height: 315
});
grid.appendTo('#Grid');

