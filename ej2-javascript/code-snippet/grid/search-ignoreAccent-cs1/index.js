
ej.grids.Grid.Inject(ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
        { field: 'CategoryName', headerText: 'Category Name', width: 100 },
        { field: 'ProductName', headerText: 'Product Name', width: 130 },
        { field: 'QuantityPerUnit', headerText: 'Quantity Per Unit', textAlign: 'Right', width: 150 },
        { field: 'UnitsInStock', headerText: 'Units In Stock', textAlign: 'Right', width: 80 },
    ]
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: onSwitchChange,
});
toggle.appendTo('#switch');

function onSwitchChange(args) {
    if (args.checked) {
        grid.searchSettings.ignoreAccent = true;
    } else {
        grid.searchSettings.ignoreAccent = false;
    }
}

