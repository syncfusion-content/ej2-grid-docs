ej.grids.Grid.Inject(ej.grids.DetailRow, ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    toolbar: ["Print"],
    hierarchyPrintMode: 'All',
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'LastName', headerText: 'Last Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 }
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
    }
});
grid.appendTo('#Grid');
var dropdownList = ['All', 'Expanded', 'None'];
var dropdownObject = new ej.dropdowns.DropDownList({
    width: "120",
    popupHeight:"220",
    dataSource: dropdownList,
    change: onModeChange,
});
dropdownObject.appendTo('#dropdown');
function onModeChange(args) {
    grid.hierarchyPrintMode = args.value;
}