var expandBtn = new ej.buttons.Button();
expandBtn.appendTo('#expandall');
var collapseBtn = new ej.buttons.Button();
collapseBtn.appendTo('#collapseall');
ej.grids.Grid.Inject(ej.grids.DetailRow);
var grid = new ej.grids.Grid({
    dataSource: employeeData,
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
    height: 265
});
grid.appendTo('#Grid');

document.getElementById('expandall').addEventListener('click', function() {
    grid.detailRowModule.expandAll();
});
document.getElementById('collapseall').addEventListener('click', function() {
    grid.detailRowModule.collapseAll();
});


