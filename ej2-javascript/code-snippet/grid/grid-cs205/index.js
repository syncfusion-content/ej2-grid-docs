ej.grids.Grid.Inject(ej.grids.Page,ej.grids.Toolbar);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSizes: true, pageSize: 12 },
    dataBound: dataBound,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date',format: 'yMd', width: 150 }
    ],
    height: 268
});
grid.appendTo('#Grid');

var initialGridLoad = true;

function dataBound()
{
    if (initialGridLoad) {
        initialGridLoad = false;
        const pager = document.getElementsByClassName('e-gridpager');
        let topElement;
        if (grid.allowGrouping || grid.toolbar) {
            topElement = grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                document.getElementsByClassName('e-toolbar');
        } else {
            topElement = document.getElementsByClassName('e-gridheader');
        }
        grid.element.insertBefore(pager[0], topElement[0]);
    }
}
