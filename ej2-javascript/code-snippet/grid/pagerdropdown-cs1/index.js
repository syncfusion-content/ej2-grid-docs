var formatOptions = { type: 'date', format: 'dd/MM/yyyy' };
var shipFormat = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' };
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'OrderDate', format: formatOptions, headerText: 'Order Date', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', format: shipFormat, headerText: 'Ship Date', textAlign: 'Right', width: 150 }
    ],
    height:315,
});
grid.appendTo('#Grid');