var gridData = new ej.data.DataManager(data).executeLocal(new ej.data.Query().take(8));

var grid = new ej.grids.Grid({
    dataSource: gridData,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    rowDataBound: rowDataBound
});

function rowDataBound(args) {
    if((args.data).OrderID === 10249){
        args.rowHeight = 90;
    }
}

grid.appendTo('#Grid');


