ej.grids.Grid.Inject(ej.grids.DetailRow, ej.grids.Toolbar, ej.grids.ExcelExport);

var grid= new ej.grids.Grid({
    dataSource: employeeData,
    toolbar: ["ExcelExport"],
    allowExcelExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'City', headerText: 'City', width: 100 },
        { field: 'Country', headerText: 'Country', width: 100 }
    ],
    childGrid: {                
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 110 }
        ],
    },
    toolbarClick: toolbarClick
});
grid.appendTo('#Grid');
var dropdownData = [
    { text: 'None', value: 'None' },
    { text: 'Expanded', value: 'Expanded' },
    { text: 'All', value: 'All' },
  ];
  
var dropDown = new ej.dropdowns.DropDownList({
    index: 0,
    width: 150,
    dataSource: dropdownData,
  });
  dropDown.appendTo('#dropdown');

function toolbarClick(args) {
    if (args['item'].id === 'Grid_excelexport') {
        var exportProperties = {
            hierarchyExportMode: dropDown.value,
        };
        grid.excelExport(exportProperties);
    }
}

