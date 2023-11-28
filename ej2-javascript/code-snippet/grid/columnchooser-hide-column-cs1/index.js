ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ColumnChooser);
var grid = new ej.grids.Grid({
    dataSource: data,
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', showInColumnChooser: false },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 150 }
    ],
    height: 272
});
grid.appendTo('#Grid');