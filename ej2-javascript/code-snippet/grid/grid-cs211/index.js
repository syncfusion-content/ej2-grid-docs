ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page, ej.grids.DetailRow);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    height: 220,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'LastName', headerText: 'Last Name', width: 100 },
        { field: 'City', headerText: 'City', width: 100 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            {
                field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90
            },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 110 },
        ],
    }
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        var exportProperties = {
            hierarchyExportMode: dropdown.value,
        };
        grid.pdfExport(exportProperties);
    }
}
var dropdownData = [
    { text: 'Expanded', value: 'Expanded' },
    { text: 'All', value: 'All' },
    { text: 'None', value: 'None' }
];

var dropdown = new ej.dropdowns.DropDownList({
    value: 'Expanded',
    popupHeight: '240px',
    width: 150,
    dataSource: dropdownData,
});
dropdown.appendTo('#dropdown');