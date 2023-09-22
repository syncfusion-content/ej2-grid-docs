var data = new ej.data.DataManager({
    adaptor: new ej.data.ODataAdaptor(),
    crossDomain: true,
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
});
let query = new ej.data.Query().expand('Employee');
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
        height:315
});
grid.appendTo('#Grid');

