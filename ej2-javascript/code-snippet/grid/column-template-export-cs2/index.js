ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ExcelExport);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        {
            headerText: 'Employee Image', textAlign: 'Center',
            template: '#imageTemplate', width: 150
        },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'EmailID', headerText: 'Email ID', template: '#mailTemplate', width: 170 }
    ],
    toolbarClick: toolbarClick,
    excelQueryCellInfo: excelQueryCellInfo,
    height: 315
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport();
    }
}

function excelQueryCellInfo(args) {
    if (args.column.headerText === 'Employee Image') {
        args.image = {
            base64: args.data.EmployeeImage,
            height: 70,
            width: 70,
        };
    }
    if (args.column.headerText === 'Email ID') {
        args.hyperLink = {
            target: 'mailto:' + args.data.EmailID,
            displayText: args.data.EmailID,
        };
    }
}

