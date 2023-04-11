ej.grids.Grid.Inject(ej.grids.Resize);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowResizing: true,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, minWidth: 10 },
            {
                headerText: 'Order Details', columns: [
                    { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 125, minWidth: 10, format: 'yMd' },
                    { field: 'Freight', headerText: 'Freight($)', textAlign: 'Right', width: 100, format: 'C2', minWidth: 10 },
                ]
            },
            {
                headerText: 'Ship Details', columns: [
                    { field: 'ShipCity', headerText: 'Ship City', width: 100, minWidth: 10, allowResizing: false },
                    { field: 'ShipCountry', headerText: 'Ship Country', width: 120, minWidth: 10 },
                ]
            }
        ]
});
grid.appendTo('#Grid');


