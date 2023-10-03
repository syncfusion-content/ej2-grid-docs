
ej.grids.Grid.Inject(ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Search'],
    searchSettings: { operator: 'contains' },
    height: 272,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 110 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
    ],
});
grid.appendTo('#Grid');
var dropdown = new ej.dropdowns.DropDownList({
    dataSource: [
        { text: 'startswith', value: 'startswith' },
        { text: 'endswith', value: 'endswith' },
        { text: 'wildcard', value: 'wildcard' },
        { text: 'like', value: 'like' },
        { text: 'equal', value: 'equal' },
        { text: 'not equal', value: 'notequal' },
    ],
    index: 0,
    width: 100,
    change: valueChange,
});
dropdown.appendTo('#dropdownlist');
function valueChange(args) {
    grid.searchSettings.operator = args.value;
}
