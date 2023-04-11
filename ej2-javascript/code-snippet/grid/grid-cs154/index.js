var grid = new ej.grids.Grid({
    dataSource: data,
    rowDataBound: rowDataBound,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2' },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ]
});
grid.appendTo('#Grid');

function rowDataBound(args) {
    args.row.addEventListener('mouseover', function(e) {
        console.log(grid.getRowInfo(e.target))
    })
}

