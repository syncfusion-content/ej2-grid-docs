import { Grid, Toolbar, PdfExport, PdfCell, DetailRow, ClickEventArgs,  PdfHeaderQueryCellInfoEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport,DetailRow);

let grid: Grid = new Grid({
  dataSource: data,
  pdfHeaderQueryCellInfo: pdfHeaderQueryCellInfo,
  allowPdfExport: true,
  toolbarClick: toolbarClick,
  toolbar: ['PdfExport'],
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
      { field: 'ShipCity', headerText: 'Ship City', width: 100 },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
  ],
  height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        (grid as Grid).pdfExport();
    }
};

function pdfHeaderQueryCellInfo(args:  PdfHeaderQueryCellInfoEventArgs)
  {
    (args.cell as PdfCell).value = '';
    if ((args.cell as PdfCell).value === '') {
      (args.cell as PdfCell).height = '';
    }
  }