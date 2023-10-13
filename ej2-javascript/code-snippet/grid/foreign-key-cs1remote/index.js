var data = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
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
                {field: 'EmployeeID', headerText: 'Employee Name', width: 120, foreignKeyValue: 'FirstName', dataSource: employeeData},
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 80},
                { field: 'ShipCity', headerText: 'Ship City', width: 130 },
            ], 
    height: 315
});
grid.appendTo('#Grid');