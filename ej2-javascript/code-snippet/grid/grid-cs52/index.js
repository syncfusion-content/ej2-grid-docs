ej.grids.Grid.Inject(ej.grids.Page, ej.grids.ExcelExport, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    toolbar: ["ExcelExport"],
    allowExcelExport: true,
    toolbarClick: toolbarClick,
    columns: [
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 },
    { field: 'FirstName', headerText: 'First Name', width: 100 },
    { field: 'LastName', headerText: 'Last Name', width: 100 },
    { field: 'City', headerText: 'City', width: 100 }
    ],
    height: 270,
});
grid.appendTo('#Grid');

var dropdownData = [
    { text: 'CurrentPage', value: 'CurrentPage' },
    { text: 'AllPages', value: 'AllPages' }
];

var dropDown = new ej.dropdowns.DropDownList({
    index: 0,
    width: 150,
    dataSource: dropdownData,
});
dropDown.appendTo('#dropdown');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_excelexport') {
    // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
    var exportProperties = {
        exportType: dropDown.value,
    };
    grid.excelExport(exportProperties);
    }
}