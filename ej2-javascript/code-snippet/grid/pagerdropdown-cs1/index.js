ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'Freight', headerText: 'Freight', format:'C2', width: 120 },
        { field: 'OrderDate',format: {type:'date', format:'dd/MM/yyyy'}, headerText:'Order Date', width:150},
        { field: 'OrderDate', format:{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }, headerText: 'Ship Date', width: 180 }
    ],
});
grid.appendTo('#Grid');

