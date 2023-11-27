import { Grid, Toolbar, PdfExport, DetailRow, ClickEventArgs,  PdfHeaderQueryCellInfoEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport,DetailRow);

let grid: Grid = new Grid({
    dataSource: data,
    pdfHeaderQueryCellInfo: pdfHeaderQueryCellInfo,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 260
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
};

function pdfHeaderQueryCellInfo(args:  PdfHeaderQueryCellInfoEventArgs)
  {
    args.cell.value = '';
    if (args.cell.value === '') {
      args.cell.height = '';
    }
  }