var grid = new ej.grids.Grid({
    dataSource: complexData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'Name.FirstName', headerText: 'First Name', width: 120 },
        { field: 'Name.LastName', headerText: 'Last Name', width: 100 },
        { field: 'Title', headerText: 'Title', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

