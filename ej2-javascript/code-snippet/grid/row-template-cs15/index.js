ej.grids.Grid.Inject(ej.grids.Page, ej.grids.ContextMenu);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    contextMenuItems: [{text: 'Copy with headers', target: '.e-content', id: 'copywithheader'}],
    allowSelection: true,
    allowPaging: true,
    contextMenuClick: function(args){
        if(args.item.id === 'copywithheader'){
            grid.copy(true);
        }
    },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120,  isPrimaryKey: true },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'LastName', headerText: 'Last Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 }
    ]
});
grid.appendTo('#Grid');

