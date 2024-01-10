var switchObj = new ej.buttons.Switch({ 
    change: function(args) {
        if (args.checked) {
            grid.getColumnByField('CustomerID').disableHtmlEncode = false;
        } else {
            grid.getColumnByField('CustomerID').disableHtmlEncode = true;
        }
        grid.refresh();
    }
 });

switchObj.appendTo('#element');

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140 },
        { field: 'CustomerID', headerText: '<strong>Customer ID</strong>', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315
});
grid.appendTo('#Grid');