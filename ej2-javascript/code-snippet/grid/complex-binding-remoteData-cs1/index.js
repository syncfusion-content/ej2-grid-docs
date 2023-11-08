var data = new ej.data.DataManager({
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
});
var query = new ej.data.Query().expand('Employee');
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    query: query,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'Employee.City', headerText: 'City', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');