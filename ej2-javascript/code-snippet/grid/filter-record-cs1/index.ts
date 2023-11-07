import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let filteredData = [];
let showRecords = false;
let showWarning = false;
let grid: Grid = new Grid({
  dataSource: data,
  allowFiltering: true,
  height: 280,
  allowPaging: true,
  pageSettings: { pageSize: 10, pageCount: 5 },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
    { field: 'ShipCity', headerText: 'Ship City', width: 120 }
  ]
});
grid.appendTo('#Grid');

(<HTMLElement>document.getElementById('getFilteredData')).addEventListener('click', function () {
  filteredData = grid.getFilteredRecords();
  showRecords = filteredData.length > 0;
  showWarning = !showRecords;
  (<HTMLElement>document.getElementById('filteredGrid')).style.display = showRecords ? 'block' : 'none';
  (<HTMLElement>document.getElementById('msg_warning')).style.display = showWarning ? 'block' : 'none';

  if (showRecords) {
    var filtergrid = new Grid({
      dataSource: filteredData,
      allowPaging: true,
      height: 200,
      columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 }
      ]
    });
    filtergrid.appendTo('#filtergrid');
  }
});

(<HTMLElement>document.getElementById('clearFilter')).addEventListener('click', function () {
  grid.clearFiltering();
  showRecords = false;
  showWarning = false;
  (<HTMLElement>document.getElementById('filteredGrid')).style.display = 'none';
  (<HTMLElement>document.getElementById('msg_warning')).style.display = 'none';
});
