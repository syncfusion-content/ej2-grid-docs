function sortComparer(reference, comparer) {
    if (reference == 32.38) {
        return -1;
    }
    return reference - comparer;
};
ej.grids.Grid.Inject(ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2', sortComparer: sortComparer },
                { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 315
});
grid.appendTo('#Grid');

