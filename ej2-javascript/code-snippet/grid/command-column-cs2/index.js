var commandClick = function(args){
    alert(JSON.stringify(args.rowData));
}
ej.grids.Grid.Inject(ej.grids.CommandColumn);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    commandClick:commandClick,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 },
        { headerText: 'Commands', width: 120, commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }]},
        ],
    height: 315
});
grid.appendTo('#Grid');

