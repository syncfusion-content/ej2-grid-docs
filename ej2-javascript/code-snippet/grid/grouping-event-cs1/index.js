ej.grids.Grid.Inject(ej.grids.Sort, ej.grids.Group);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    actionComplete: actionComplete,
    actionBegin: actionBegin,

    columns: [
        {
            field: 'OrderID',
            headerText: 'Order ID',
            textAlign: 'Right',
            width: 90,
        },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 },
    ],
    height: 260,
});
grid.appendTo('#Grid');

function actionBegin(args) {
    if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
        args.cancel = true
    }
}

let message = document.getElementById('message');

function actionComplete(args) {
    if (args.requestType === 'grouping') {

        message.innerHTML = args.requestType + ' action completed for ' + args.columnName + ' column';
        console.log(message)
    }
    else {
        message.innerHTML = ''
    }
}