ej.grids.Grid.Inject(ej.grids.Filter, ej.grids.Sort, ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 120 }
    ],
});
grid.appendTo('#Grid');

var clearButton = new ej.buttons.Button({ cssClass: 'e-primary' }, '#clearfilter');
document.getElementById('clearfilter').onclick = function () {
    grid.clearFiltering(); //clear filtering for all columns
};