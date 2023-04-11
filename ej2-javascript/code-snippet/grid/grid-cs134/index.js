ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 325,
    load: () => {
        var rowHeight = grid.getRowHeight();  //height of the each row 
        var gridHeight = grid.height;
        var pageSize = grid.pageSettings.pageSize;   //initial page size
        var pageResize = (gridHeight - (pageSize * rowHeight)) / rowHeight; //new page size is obtained here
        grid.pageSettings.pageSize = pageSize + Math.round(pageResize);
    }
});
grid.appendTo('#Grid');

