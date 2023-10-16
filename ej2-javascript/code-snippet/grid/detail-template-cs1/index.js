ej.grids.Grid.Inject(ej.grids.DetailRow);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'LastName', headerText: 'Last Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');