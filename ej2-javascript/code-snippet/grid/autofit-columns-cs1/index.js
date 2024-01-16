ej.grids.Grid.Inject(ej.grids.Resize);
var grid = new ej.grids.Grid({
    dataSource: data,
    gridLines:'Both',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 80 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 }
       
    ],
    dataBound: function(){
       grid.autoFitColumns(['ShipName', 'ShipAddress'])
    },
    height: 315
});
grid.appendTo('#Grid');