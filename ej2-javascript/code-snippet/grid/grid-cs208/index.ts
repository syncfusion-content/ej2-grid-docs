import { Grid, Toolbar, PdfExport, ClickEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format:  { type: 'date', format: "EEE, MMM d, ''yy" } },
        {field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2'},
    ],
    height: 220,
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}