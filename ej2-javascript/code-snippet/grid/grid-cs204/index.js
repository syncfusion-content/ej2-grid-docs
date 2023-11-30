
ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date',format: 'yMd', width: 150 }
    ]
});
grid.appendTo('#Grid');

var numeric = new ej.inputs.NumericTextBox({
    placeholder: 'select container height', 
    format: '###.##',
    min: 150, 
    step: 50,
    change: calculatePageSize,
    width: 120
})
numeric.appendTo('#numeric');

function calculatePageSize( {value }) {
    var stringValue = value.toString();
    var pageSize = grid.calculatePageSizeByParentHeight(stringValue);
    grid.pageSettings.pageSize = pageSize;
}