import { Grid, Toolbar, PdfExport,ClickEventArgs, GridComponent } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    pdfExportComplete: pdfExportComplete,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ProductName', headerText: 'Product Name', width: 110 },
        { field: 'Quantity', headerText: 'Quantity', width: 100 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        (grid as GridComponent).showSpinner();
        (grid as GridComponent).pdfExport();
    } 
}

function pdfExportComplete()
{
    (grid as GridComponent).hideSpinner();
}