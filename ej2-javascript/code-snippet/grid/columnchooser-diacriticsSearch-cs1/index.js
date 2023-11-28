ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ColumnChooser);
var grid = new ej.grids.Grid({
    dataSource: data,
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    columnChooserSettings : { ignoreAccent: true },
    columns: [
        { field: 'ÒrderID̂', headerText: 'Òrder ID̂', width: 120, textAlign: 'Right'},
        { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 130 }
    ],
    height: 272   
});

grid.appendTo('#Grid');