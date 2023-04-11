var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 220,
    rowSelected: rowSelected
});
grid.appendTo('#Grid');

function rowSelected(args) {
    alert("row index: "+args.row.getAttribute('aria-rowindex'));
    alert("column index: "+args.target.getAttribute('aria-colindex'));
}

