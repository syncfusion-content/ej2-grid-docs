var listObj = new ej.dropdowns.DropDownList({
    dataSource: ddlData,
    id:"value",
    index:"0",
    width:"100",
    change: valueChange
});
listObj.appendTo('#ddl');

var grid = new ej.grids.Grid({
    dataSource: data,
    gridLines: 'Default',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

function valueChange(args) {
    grid.gridLines = args.value;
}