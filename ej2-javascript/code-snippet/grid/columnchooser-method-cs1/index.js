ej.grids.Grid.Inject(ej.grids.ColumnChooser);
var grid = new ej.grids.Grid({
    dataSource: data,
    showColumnChooser: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', showInColumnChooser: false },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 150 }
    ],
    height: 235
});
grid.appendTo('#Grid');

var show = new ej.buttons.Button({ cssClass: 'e-primary' }, '#show');
document.getElementById('show').onclick = function() {
    grid.columnChooserModule.openColumnChooser(100, 40); // give X and Y axis
};