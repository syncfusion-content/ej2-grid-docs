var grid= new ej.grids.Grid({
    dataSource: data,
    rowDataBound: rowDataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 80, textAlign: 'Right', format:'C2' },
        { field: 'Verified', headerText: 'Verified', width: 130, displayAsCheckBox: true }
    ]
});
grid.appendTo('#Grid');

function rowDataBound(args) {
    var count = 0;
    var keys = Object.keys(args.data);
    for (var i = 0; i < keys.length; i++) {
        if (args.data[keys[i]] == null || args.data[keys[i]] == '' || args.data[keys[i]] == undefined) {
            count++;
        }
    }
    if (count == keys.length) {
        for (var i = 0; i < grid.columns.length; i++) {
            if (grid.columns[i].displayAsCheckBox) {
                args.row.children[i].innerHTML = '';
            }
        }
    }
}

