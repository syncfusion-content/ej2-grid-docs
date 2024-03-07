ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Group, ej.grids.Sort, ej.grids.Filter, ej.grids.ColumnMenu);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    allowPaging: true,
    groupSettings: { showGroupedColumn: true },
    showColumnMenu: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140, textAlign: 'Right'},
        { field: 'CustomerID', headerText: 'Customer Name' },
        { field: 'Freight',headerText: 'Freight', width: 150, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ],
    columnMenuOpen: function() {
        document.getElementById('message').innerText ='columnMenuOpen event is Triggered';
    },
    columnMenuClick: function() {
        document.getElementById('message').innerText ='columnMenuClick event is Triggered';
    },
    height: 315,
});
grid.appendTo('#Grid');