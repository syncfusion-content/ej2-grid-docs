ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageCount: 5 },
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 180, type: 'datetime', format: 'M/d/y HH:mm', textAlign: 'Right' },
        { field: 'ShippedDate', headerText: 'Shipped Date', width: 180, type: 'datetime', format: 'M/d/y HH:mm', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    actionComplete: actionComplete
});     
grid.appendTo('#Grid');

function actionComplete(args) {
    if (args.requestType === 'filterafteropen') {
        var columnObj = grid.getColumnByField(args.columnName);
        if (columnObj.type === 'datetime') {
            var dateObj = document.getElementById('dateui-' + columnObj.uid)['ej2_instances'][0];
            dateObj.timeFormat = 'HH:mm';
        }
    }
}