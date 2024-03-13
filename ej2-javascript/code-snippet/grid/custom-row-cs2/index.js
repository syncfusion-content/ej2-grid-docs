var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 80 },
            { field: 'ShipCity', headerText: 'Ship City', width: 130 }
    ],
    rowDataBound: rowDataBound
});

function rowDataBound(args) {
    if((args.data).OrderID === 10249){
        args.rowHeight = 90;
    }
}
grid.appendTo('#Grid');