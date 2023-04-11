ej.grids.Grid.Inject(ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSorting: true,
    sortSettings: { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'CustomerID', direction: 'Descending' },{ field: 'ShipCity', direction: 'Ascending' },{ field: 'ShipName', direction: 'Descending' }] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');

var singleclear = new ej.buttons.Button({ cssClass: 'e-flat' }, '#SingleClearSort');
var multiclear = new ej.buttons.Button({ cssClass: 'e-flat' }, '#MultiClearSort');

document.getElementById('SingleClearSort').addEventListener('click', () => {
    var column = grid.sortModule.sortSettings.columns;
    for(var i=0;i < column.length;i++){
        if(column[i].field == "OrderID") {
            column.splice(i,1);
            grid.refresh();
        }
    }
});

document.getElementById('MultiClearSort').addEventListener('click', () => {
    grid.clearSorting();
});

