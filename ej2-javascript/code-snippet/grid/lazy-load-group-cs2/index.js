ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Group, ej.grids.LazyLoadGroup, ej.grids.InfiniteScroll);
var grid = new ej.grids.Grid({
    dataSource: data,
    enableInfiniteScrolling: true,
    allowGrouping: true,
    groupSettings: { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 160 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
    ],
    height: 220
});
grid.appendTo('#Grid');

