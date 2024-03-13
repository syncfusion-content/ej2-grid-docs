import { Grid, Toolbar, PdfExport, PdfExportCompleteArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    pdfExportComplete: pdfExportComplete,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'ShipName', width: 120 }
    ],
    height: 230
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        // pass fourth parameter as true to get the blob data of exported grid
        (grid as Grid).pdfExport(null, null, null, true);
    }
}

function pdfExportComplete(args: PdfExportCompleteArgs) {
    // execute the promise to get the blob data
    if (args && args.promise) {
        // Execute the promise to get the blob data
        args.promise.then(function (e: { blobData: Blob }) {
            exportBlob(e.blobData);
        });
    }
};

function exportBlob(blob: Blob) {
    let a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    let url = window.URL.createObjectURL(blob); // Fix typo here
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url); // Fix typo here
    document.body.removeChild(a);
}