ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120 }
    ]
});
grid.appendTo('#Grid');

var numeric = new ej.inputs.NumericTextBox({
    placeholder: 'select container height',
    format: '###.##',
    min: 150,
    step: 50,
    change: calculatePageSize,
    width: 200
})
numeric.appendTo('#numeric');

function calculatePageSize({ value }) {
    var stringValue = value.toString();
    var pageSize = grid.calculatePageSizeByParentHeight(stringValue);
    grid.pageSettings.pageSize = pageSize;
}