ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageCount: 5 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
        { headerText: 'Action', width: 150, template: function () {
            return '<button class="e-btn">Custom action</button>';
          }
        }
    ],
    height: 273,
    load: load
});
grid.appendTo('#Grid');

function load() {
    grid.columns[2].filterTemplate = '<span></span>';
}