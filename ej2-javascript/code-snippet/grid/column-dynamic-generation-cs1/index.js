var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'S.No', headerText: 'S.No', textAlign: 'Center', width: 120 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100 ,format:'C2'},
        { field: 'OrderDate', headerText: 'OrderDate', width: 100, format:'yMd'}
    ],
    pageSettings: { pageSize: 8 },
    rowDataBound: function (args) {
        var rowIndex = parseInt(args.row.getAttribute('aria-rowIndex'));
        var currentPageNumber = grid.pageSettings.currentPage;
        var pageSize = grid.pageSettings.pageSize;
        var startIndex = (currentPageNumber - 1) * pageSize;
        args.row.querySelector('.e-rowcell').innerHTML = (startIndex + rowIndex).toString();
      },
});
grid.appendTo('#Grid');


