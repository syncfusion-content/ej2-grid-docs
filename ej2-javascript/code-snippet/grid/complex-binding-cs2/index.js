var grid = new ej.grids.Grid({
    dataSource: complexData.slice(0,5),
    columns: [
        { field: 'EmployeeID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        {
            field: 'Names.0.LastName', headerText: 'Employee Name', width: 150
        },
        { field: 'Region', headerText: 'Freight', width: 100, textAlign: 'Right' },
        { field: 'Address', headerText: 'Ship Name', width: 180 }
    ],
    height: 315
});
grid.appendTo('#Grid');

