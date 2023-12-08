import { Grid, Toolbar, PdfExport,  ClickEventArgs} from '@syncfusion/ej2-grids';
import { data,employeeData } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let firstGrid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    exportGrids: ['FirstGrid', 'SecondGrid'],
    toolbar: ['PdfExport'],
    columns: [
      {field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 120,type: 'number'},
      {field: 'CustomerID',width: 140,headerText: 'Customer ID',type: 'string'},
      {field: 'ShipCity',headerText: 'Ship City',textAlign: 'Right',width: 120},
      {field: 'ShipName',headerText: 'Ship Name',textAlign: 'Right',width: 120},
    ],
});
firstGrid.appendTo('#FirstGrid');

let SecondGrid: Grid = new Grid({
    dataSource: employeeData,
    allowPdfExport: true,
    columns: [
      {field: 'EmployeeID',headerText: 'Employee ID',textAlign: 'Right',width: 120,type: 'number'},
      {field: 'FirstName',width: 140,headerText: 'First Name',type: 'string'},
      {field: 'LastName',headerText: 'Last Name',textAlign: 'Right',width: 120},
      {field: 'City', headerText: 'City', textAlign: 'Right', width: 120 },
    ],
    height: 272,
});
SecondGrid.appendTo('#SecondGrid');

let appendPdfExportProperties = {
  multipleExport: { type: 'NewPage' },
};

firstGrid.toolbarClick = function (args: ClickEventArgs) {
  if (args.item.text === 'PDF Export') {
    firstGrid.pdfExport(appendPdfExportProperties, true);
  }
};