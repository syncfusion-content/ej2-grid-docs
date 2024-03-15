ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.ExcelExport);
var grid = new ej.grids.Grid({
  dataSource: data,
  toolbar: ['ExcelExport'],
  allowExcelExport: true,
  toolbarClick: function (args) {
      if (args.item.id === 'Grid_excelexport') {
          grid.excelExport();
      }
  },
  excelHeaderQueryCellInfo: function (args) {
      args.gridCell.value = '';
  },
  created: function () {
      var processGridExportObject = grid.excelExportModule.__proto__.processGridExport;
      grid.excelExportModule.__proto__.processGridExport = function (gobj, props, r) {
          var rows = processGridExportObject.call(this, gobj, props, r);
          rows.shift();
          rows.forEach(function (item, index) {
              item.index = index + 1;
          });
          return rows;
      };
  },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'OrderDate', headerText: 'Order Date', format: { type: 'date', format: 'yMd' }, width: 100 },
      { field: 'Freight', headerText: 'Freight', width: 80 }
  ],
  height: '272px'
});
grid.appendTo('#Grid');