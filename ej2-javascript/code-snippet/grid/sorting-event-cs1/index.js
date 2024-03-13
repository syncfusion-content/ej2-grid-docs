ej.grids.Grid.Inject(ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315,
    actionBegin: actionBegin,
    actionComplete: actionComplete
});
grid.appendTo('#Grid');

function actionBegin(args) {
    if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
        args.cancel = true;
    }
}
function actionComplete(args) {
    document.getElementById('message').innerText = args.requestType + ' action completed for ' +args.columnName + ' column';
}