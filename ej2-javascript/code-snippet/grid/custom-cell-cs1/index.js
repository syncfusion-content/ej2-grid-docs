var grid = new ej.grids.Grid({
    dataSource: data,
    height: '315',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140 },
        { field: 'CustomerID', headerText: '<strong> Customer ID </strong>', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 130 }
    ]
});
grid.appendTo('#Grid');

var switchObj = new ej.buttons.Switch({
    change: change,
});
switchObj.appendTo('#switch');

function change(args) {
    if (args.checked) {
        grid.getColumnByField('CustomerID').disableHtmlEncode = false;
    } else {
        grid.getColumnByField('CustomerID').disableHtmlEncode = true;
    }
    grid.refreshColumns();
}