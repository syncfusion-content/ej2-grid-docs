ej.grids.Grid.Inject(ej.grids.Group, ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 260,
    actionBegin: actionHandler,
    actionComplete: actionHandler
});
grid.appendTo('#Grid');

function actionHandler(args) {
    alert(args.requestType + ' ' + args.type); //Custom Action
}

