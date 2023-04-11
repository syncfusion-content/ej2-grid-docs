var grid = new ej.grids.Grid({
    dataSource: data.slice(0, 5),
    height: '315',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataBound:() => {
        grid.hideScroll();
    }
});
grid.appendTo('#Grid');

