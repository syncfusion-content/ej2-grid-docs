import { Grid, Toolbar, ExcelExport, PdfExport } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, ExcelExport, PdfExport);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
  var target: Element = (<HTMLElement>args.originalEvent.target).closest('.e-toolbar-item');
  if (target.id === 'excelButton') {
    grid.excelExport();
  } else if (target.id === 'pdfButton') {
    grid.pdfExport();
  } else {
    grid.print();
  }
};

let grid: Grid = new Grid({
  dataSource: data,
  toolbarTemplate: '#toolbar-template',
  toolbarClick: clickHandler,
  allowExcelExport: true,
  allowPdfExport: true,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
    { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
    { field: 'ShipName', headerText: 'ShipName', width: 120 }
  ],
  height: 200
});
grid.appendTo('#Grid');