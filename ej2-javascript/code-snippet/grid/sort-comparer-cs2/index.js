function sortComparer(reference, comparer) // The custom function
{
    if (reference < comparer) {
        return -1;
    }
    if (reference > comparer) {
        return 1;
    }
    return 0;
};
ej.grids.Grid.Inject(ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', sortComparer: sortComparer, width: 100, headerText: 'Customer ID' },
        { field: 'Freight', textAlign: 'Right', width: 80, format: 'C2' },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 315
});
grid.appendTo('#Grid');