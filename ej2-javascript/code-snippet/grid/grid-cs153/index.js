ej.grids.Grid.Inject(ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Print'],
    printMode: 'CurrentPage',
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

var dropdownList = ['CurrentPage', 'AllPages'];
var dropdownObject = new ej.dropdowns.DropDownList({
    index: "0",
    width: "120",
    dataSource: dropdownList,
    change: onChange,
});
dropdownObject.appendTo('#dropdown');
function onChange(args) {
    grid.printMode = args.value;
}
