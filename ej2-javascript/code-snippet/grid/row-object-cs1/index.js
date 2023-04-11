var grid = new ej.grids.Grid({
    dataSource: employeeData,
    columns: [
        {
            headerText: 'Employee Data', textAlign: 'Right',
            template: '#template', width: 150, isPrimaryKey: true
        },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 130 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 }
    ],
    height: 315,
    recordClick: (args) => {
        if (args.target.classList.contains('empData')) {
            var rowObj = grid.getRowObjectFromUID(ej.base.closest(args.target, '.e-row').getAttribute('data-uid')
            );
            console.log(rowObj);
        }
    }
});
grid.appendTo('#Grid');

