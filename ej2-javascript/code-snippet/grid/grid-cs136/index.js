ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Toolbar);
var initialGridLoad = true;
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: { pageSizes: true, pageSize: 8 },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

grid.dataBound = () =>{
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
};

