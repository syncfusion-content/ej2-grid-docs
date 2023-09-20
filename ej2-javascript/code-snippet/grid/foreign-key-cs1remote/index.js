var data = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
    adaptor: new ej.data.ODataV4Adaptor()
});
var employeeData = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees/',
    adaptor: new ej.data.ODataV4Adaptor()
});
ej.grids.Grid.Inject(ej.grids.ForeignKey);
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
                { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
                { field: 'ShipName', headerText: 'Ship Name', width: 180 },
                {
                    field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData
                }
            ],
    height: 315
});
grid.appendTo('#Grid');

