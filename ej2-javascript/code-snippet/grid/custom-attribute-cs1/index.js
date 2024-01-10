var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', customAttributes: {class: "custom-css"}, textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', customAttributes: {class: "custom-css"}, width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');


