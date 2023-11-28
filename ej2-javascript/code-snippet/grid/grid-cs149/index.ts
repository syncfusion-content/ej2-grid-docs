import { Grid, Toolbar, PdfExport,ClickEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    pdfExportComplete: pdfExportComplete,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120},
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', textAlign: 'Right'},
        { field: 'ProductName', headerText: 'Product Name', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'Quantity', headerText: 'Quantity', textAlign: 'Right', width: 140}
    ],
    height: 272
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.showSpinner();
        grid.pdfExport();
    } 
}

function pdfExportComplete()
{
    grid.hideSpinner();
}