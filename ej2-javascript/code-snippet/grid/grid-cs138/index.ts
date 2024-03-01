import { Grid, Toolbar, Page, PdfExport,PdfHeaderQueryCellInfoEventArgs} from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { purchaseData } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: purchaseData,
    toolbar: ['PdfExport'],
    pdfHeaderQueryCellInfo: pdfHeaderQueryCellInfo,
    toolbarClick: toolbarClick,
    allowPaging: true,
    allowPdfExport: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90},
        { field: 'CustomerID', headerText: 'Customer ID', width: 100},
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs){
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function pdfHeaderQueryCellInfo(args: PdfHeaderQueryCellInfoEventArgs){
    args.cell.row.pdfGrid.repeatHeader = true;
}

interface PdfHeaderQueryCellInfoEventArgs {
    cell: {
        row: {
            pdfGrid: {
                repeatHeader: boolean;
            };
        };
    };
}