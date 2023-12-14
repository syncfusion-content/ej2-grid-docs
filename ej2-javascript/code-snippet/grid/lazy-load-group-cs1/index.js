ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Group, ej.grids.LazyLoadGroup);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowGrouping: true,
    groupSettings: { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'ProductName', headerText: 'Product Name', width: 100 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 80 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 120 }
    ],
    height: 220
});
grid.appendTo('#Grid');