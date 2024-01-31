var grid = new ej.grids.Grid({
    dataSource: data,
    dataBound:customizeRows,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID',  width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 100 },
        { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 100 }
    ]
});
grid.appendTo('#Grid');
function customizeRows()
{
    grid.getRowByIndex(2).style.background = 'rgb(193, 228, 234)';
}