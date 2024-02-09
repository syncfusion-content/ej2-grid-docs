import { Grid, Page, ActionEventArgs, PrintEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Chart, DateTime, LineSeries } from '@syncfusion/ej2-charts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Page);
Chart.Inject(DateTime, LineSeries);

let grid: Grid = new Grid({
  dataSource: data,
  allowPaging: true,
  pageSettings: { pageSize: 10 },
  columns: [
    { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
    { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right'},
  ],
  dataBound: function () {
    chart.series[0].marker = { visible: true };
    chart.series[0].xName = 'OrderDate';
    chart.series[0].yName = 'Freight';
    chart.series[0].dataSource = grid.getCurrentViewRecords();
    chart.refresh();
  },
  actionComplete: function (args: ActionEventArgs) {
    if (args.requestType === 'paging') {
      chart.series[0].dataSource = grid.getCurrentViewRecords();
      chart.refresh();
    }
  },
  beforePrint: function (args: PrintEventArgs) {
    if (chartContainer) {
      const clonedChartContainer = chartContainer.cloneNode(true);
      args.element.appendChild(clonedChartContainer);
    }
  },
});
grid.appendTo('#Grid');
var chartContainer = document.getElementById('chart-container');
let chart: Chart = new Chart({
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


let printbutton: Button = new Button({ cssClass: 'e-danger' },'#printbtn');
(document.getElementById('printbtn') as HTMLElement).addEventListener('click',function () {
    grid.print();
  });
