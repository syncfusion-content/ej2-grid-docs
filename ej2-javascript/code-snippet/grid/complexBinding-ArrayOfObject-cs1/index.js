var grid = new ej.grids.Grid({
    dataSource: complexData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'Names.0.FirstName', headerText: 'First Name', width: 150},
        { field: 'Names.0.LastName', headerText: 'Last Name', width: 100, textAlign: 'Right' },
        { field: 'Title', headerText: 'Title', width: 180 }
    ],
    height: 315
});
grid.appendTo('#Grid');

