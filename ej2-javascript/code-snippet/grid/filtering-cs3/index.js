ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings:{ type:'Excel' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');
var singleFilterButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#singleFilter');
document.getElementById('singleFilter').onclick = function() {
    grid.clearFiltering(); // filter OrderID column with single value
     grid.filterByColumn('OrderID', 'equal', 10248); 
};

var multipleFilterButton = new ej.buttons.Button({ cssClass: 'e-outline' }, '#multipleFilter');
document.getElementById('multipleFilter').onclick = function() {
    grid.clearFiltering(); // filter CustomerID column with multiple values
    grid.filterByColumn('CustomerID', 'equal', [
        'VINET',
        'TOMSP',
        'ERNSH',
    ]); 
};
