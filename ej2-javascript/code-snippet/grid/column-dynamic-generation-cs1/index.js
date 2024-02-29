var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowDeleting: true, allowAdding: true, allowEditing: true },
    columns: [
        { field: 'S.No', headerText: 'S.No', textAlign: 'Center', width: 120 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right' ,format:'C', width: 120},
        { field: 'OrderDate', headerText: 'OrderDate', textAlign: 'Right', format:'yMd', width: 140}
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