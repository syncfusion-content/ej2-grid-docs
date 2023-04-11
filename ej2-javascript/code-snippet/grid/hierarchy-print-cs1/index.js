ej.grids.Grid.Inject(ej.grids.DetailRow, ej.grids.Toolbar, ej.grids.ExcelExport);

var grid= new ej.grids.Grid({
    dataSource: employeeData,
    toolbar: ["ExcelExport"],
    allowExcelExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    },
    beforeExcelExport: beforeExcelExport,
    toolbarClick: toolbarClick
});
grid.appendTo('#Grid');

function beforeExcelExport(args) {
    args.isChild = true;
}

function toolbarClick(args) {
    if (args['item'].id === 'Grid_excelexport') {
        var exportProperties = {
           hierarchyExportMode: "Expanded"
        };
        grid.excelExport(exportProperties);
    }
}

