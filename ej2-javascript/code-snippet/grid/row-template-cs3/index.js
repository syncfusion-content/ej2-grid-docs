var grid = new ej.grids.Grid ({
    dataSource: data,
    dataBound: dataBound
});
grid.appendTo('#Grid');

function dataBound() {
    for (var i = 0; i < this.columns.length; i++) {
      if (this.columns[i].field === 'OrderID') {
        this.columns[i].width = 120;
      }
      if (this.columns[i].field === 'OrderDate') {
        this.columns[i].type = 'date';
        this.columns[i].format = 'yMd';
      }
      if (this.columns[i].field === 'Freight') {
        this.columns[i].format = 'P2';
      }
    }
    grid.refreshColumns();
  }