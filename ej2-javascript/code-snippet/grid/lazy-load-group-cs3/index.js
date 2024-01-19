ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Group, ej.grids.LazyLoadGroup, ej.grids.Sort, ej.grids.Filter);
var grid = new ej.grids.Grid({
    height: 300,
    allowPaging: true,
    allowGrouping: true,
    allowSorting: true,
    allowFiltering: true,
    groupSettings: { enableLazyLoading: true, columns: ['ProductName'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 160 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
    ],
    load: load,
    dataStateChange: dataStateChange,
});
grid.appendTo('#Grid');

function load() {
    var query = new ej.data.Query();
    // initial group query
    if (this.groupSettings && this.groupSettings.columns.length) {
        for (var i = 0; i < this.groupSettings.columns.length; i++) {
            query.group(this.groupSettings.columns[i]);
        }
    }
    // initial lazy load group query
    if (this.groupSettings.enableLazyLoading) {
        query.lazyLoad.push({ key: 'isLazyLoad', value: true });
    }
    // initial page query
    if (this.allowPaging) {
        var pageIndex = 1;
        var pageSize = 12;
        query.isCountRequired = true;
        query.page(pageIndex, pageSize);
    }
    createLazyLoadData();
    grid.dataSource = new ej.data.DataManager(lazyLoadData).executeLocal(query);
}

function dataStateChange(state) {
    var query = new ej.data.Query();

    // filter query
    if (state.where) {
        var gridqueries = grid.getDataModule().generateQuery().queries;
        var wherequery;
        for (var i = 0; i < gridqueries.length; i++) {
            if (gridqueries[i].fn == 'onWhere') {
                wherequery = gridqueries[i].e;
            }
        }
        query.where(wherequery);
    }

    // sort query
    if (state.sorted && state.sorted.length) {
        for (var i = 0; i < state.sorted.length; i++) {
            query.sortBy(state.sorted[i].name, state.sorted[i].direction);
        }
    }

    // group query
    if (state.group && state.group.length) {
        for (var i = 0; i < state.group.length; i++) {
            query.group(state.group[i]);
        }
    }

    // lazy load group query
    if (state.isLazyLoad) {
        query.lazyLoad.push({ key: 'isLazyLoad', value: state.isLazyLoad });
    }

    if (state.isLazyLoad && state.onDemandGroupInfo) {
        query.lazyLoad.push({
            key: 'onDemandGroupInfo',DataManager
            value: state.action.lazyLoadQuery,
        });
        query.isCountRequired = true;
    }

    // page query
    if (state.take > -1 && state.skip > -1) {
        var pageIndex = state.skip / state.take + 1;
        var pageSize = state.take;
        query.page(pageIndex, pageSize);
    }
    if (state.requiresCounts) {
        query.isCountRequired = state.requiresCounts;
    }

    // bind the data to grid
    grid.dataSource = new ej.data.DataManager(lazyLoadData).executeLocal(query);

}