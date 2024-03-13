ej.grids.Grid.Inject(ej.grids.Page,ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSizes: true, pageSize: 12 },
    dataBound: dataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 268
});
grid.appendTo('#Grid');

var initialGridLoad = true;

function dataBound()
{
    if (initialGridLoad) {
        initialGridLoad = false;
        var pager = document.getElementsByClassName('e-gridpager');
        var topElement;
        if (grid.allowGrouping || grid.toolbar) {
            topElement = grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                document.getElementsByClassName('e-toolbar');
        } else {
            topElement = document.getElementsByClassName('e-gridheader');
        }
        grid.element.insertBefore(pager[0], topElement[0]);
    }
}