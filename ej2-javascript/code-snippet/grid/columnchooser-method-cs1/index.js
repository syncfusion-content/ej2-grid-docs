ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ColumnChooser);
var grid = new ej.grids.Grid({
    dataSource: data,
    showColumnChooser: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, showInColumnChooser: false },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 150 }

    ],
    height: 235
});
grid.appendTo('#Grid');
var show = new ej.buttons.Button({ cssClass: 'e-flat' }, '#show');

document.getElementById('show').onclick = function() {
    grid.columnChooserModule.openColumnChooser(200, 50); // give X and Y axis
};


