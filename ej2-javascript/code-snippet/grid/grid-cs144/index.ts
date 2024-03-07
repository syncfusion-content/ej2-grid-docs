import { Grid, Toolbar, PdfExport, Column } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    pdfExportComplete: pdfExportComplete,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false, width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },

    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        ((grid as Grid).columns[1] as Column).visible = true;
        ((grid as Grid).columns[2] as Column).visible = false;
        (grid as Grid).pdfExport();
    }
}
function pdfExportComplete() {
    ((grid as Grid).columns[1] as Column).visible = false;
    ((grid as Grid).columns[2] as Column).visible = true;
}