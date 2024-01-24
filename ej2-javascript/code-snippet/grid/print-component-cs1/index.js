ej.grids.Grid.Inject( ej.grids.Page);
var chartContainer = document.getElementById('chart-container');
var grid = new ej.grids.Grid({
  dataSource: data,
  allowPaging: true,
  pageSettings: { pageSize: 10 },
  columns: [
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'right'},
    { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'right'},
  ],
  dataBound: function () {
    chart.series[0].marker = { visible: true };
    chart.series[0].xName = 'OrderDate';
    chart.series[0].yName = 'Freight';
    chart.series[0].dataSource = grid.getCurrentViewRecords();
    chart.refresh();
  },
  actionComplete: function (args) {
    if (args.requestType === 'paging') {
      chart.series[0].dataSource = grid.getCurrentViewRecords();
      chart.refresh();
    }
  },
  beforePrint: function (args) {
    if (chartContainer) {
      const clonedChartContainer = chartContainer.cloneNode(true);
      args.element.appendChild(clonedChartContainer);
    }
  },
});
grid.appendTo('#Grid');

var chart = new ej.charts.Chart({
  primaryXAxis: { valueType: 'DateTime' },
  series: [
    {
      type: 'Line',
      xName: 'OrderDate',
      yName: 'Freight',
      dataSource: grid.getCurrentViewRecords(),
      marker: { visible: true },
      width: 1,
      columnWidth: 0.4,
      name: 'dataview',
    },
  ],
  width: '90%',
  title: 'Chart Title',
});
chart.appendTo('#chart-container');

var printBtn = new ej.buttons.Button({ cssClass: 'e-danger' },'#printbtn');
document.getElementById('printbtn').addEventListener('click', function () {
  grid.print();
});