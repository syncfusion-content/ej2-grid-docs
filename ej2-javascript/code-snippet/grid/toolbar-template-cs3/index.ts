import { Grid, Toolbar, ExcelExport, PdfExport } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Toolbar, ExcelExport, PdfExport);

let grid: Grid = new Grid({
  dataSource: data,
  toolbarTemplate: '#toolbar-template',
  allowExcelExport: true,
  allowPdfExport: true,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
    { field: 'ShipName', headerText: 'ShipName', width: 120 }
  ],
  height: 250
});
grid.appendTo('#Grid');

let excelExportButton: Button = new Button({ cssClass:"e-outline"  },'#excelButton');
(document.getElementById('excelButton')as HTMLElement).onclick = function () {
  grid.excelExport();
};

let pdfExportButton: Button = new Button({ cssClass: "e-outline" },'#pdfButton');
(document.getElementById('pdfButton')as HTMLElement).onclick = function () {
  grid.pdfExport();
};

let print: Button = new Button({ cssClass: "e-outline" },'#printButton');
(document.getElementById('printButton')as HTMLElement).onclick = function () {
  grid.print();
};