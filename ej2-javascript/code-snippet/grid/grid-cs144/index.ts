import { Grid, Toolbar, PdfExport, ColumnModel } from '@syncfusion/ej2-grids';
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
        (grid.columns[1] as ColumnModel).visible = true;
        (grid.columns[2] as ColumnModel).visible = false;
        grid.pdfExport();
    }
}
function pdfExportComplete() {
    (grid.columns[1] as ColumnModel).visible = false;
    (grid.columns[2] as ColumnModel).visible = true;
}