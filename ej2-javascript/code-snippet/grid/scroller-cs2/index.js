ej.grids.Grid.Inject(ej.grids.Freeze);
var grid = new ej.grids.Grid({
     dataSource: data,
    height: 315,
    allowSelection: false,
    enableHover: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isFrozen: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, isFrozen: true },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 170 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 150 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal Code', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 120 }
    ]
});
grid.appendTo('#Grid');


