ej.grids.Grid.Inject(ej.grids.Sort);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');

var singlesort = new ej.buttons.Button({ cssClass: 'e-flat' }, '#SingleSort');
var multisort = new ej.buttons.Button({ cssClass: 'e-flat' }, '#MultiSort');

document.getElementById('SingleSort').addEventListener('click', () => {
    grid.sortColumn("OrderID","Descending")
});

document.getElementById('MultiSort').addEventListener('click', () => {
    grid.sortModule.sortSettings.columns.push({ field: 'ShipCity',  direction: 'Ascending' },{ field: 'ShipName', direction: 'Descending' });
    grid.refresh();
});

