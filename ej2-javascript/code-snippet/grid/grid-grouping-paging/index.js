ej.grids.Grid.Inject(ej.grids.Group, ej.grids.Page);

var oldGenerateQuery = ej.grids.Data.prototype.generateQuery;
ej.grids.Data.prototype.generateQuery = function () {
  var query = oldGenerateQuery.call(this, true);
  // Check if 'pageQuery' is available in the prototype chain
  if (ej.grids.Data.prototype.hasOwnProperty('pageQuery')) {
    var pageQueryFn = ej.grids.Data.prototype['pageQuery'];
    pageQueryFn.call(this, query);
  }
  return query;
};

var grid = new ej.grids.Grid({
  dataSource: data,
  allowGrouping: true,
  allowPaging: true,
  pageSettings: { pageSize: 5 },
  groupSettings: { showGroupedColumn: false, columns: ['ShipCountry'] },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipName', headerText: 'Ship Name', width: 120 },
    { field: 'Freight', headerText: 'Freight', format: 'C2', width: 120 },
  ],
  height: 267,
});
grid.appendTo('#Grid');