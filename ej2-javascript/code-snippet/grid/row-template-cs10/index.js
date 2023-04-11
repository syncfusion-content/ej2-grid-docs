ej.grids.Grid.Inject(ej.grids.Resize);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowResizing: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width:150 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal code', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

