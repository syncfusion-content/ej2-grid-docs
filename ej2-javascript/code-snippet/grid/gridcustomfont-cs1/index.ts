


import { Grid, Page, Toolbar, PdfExport, Group, PdfExportProperties } from '@syncfusion/ej2-grids';
import { data, adventProFont } from './datasource.ts';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

Grid.Inject(Page, Toolbar, PdfExport, Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowGrouping: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Rendelés azonosító', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Ügyfél-azonosító', type: 'string' },
        { field: 'Freight', headerText: 'fuvar', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Rendelés dátuma', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 172
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        let pdfExportProperties: PdfExportProperties = {
            theme: {
                header: {font:  new PdfTrueTypeFont(adventProFont, 12) },
                caption: { font: new PdfTrueTypeFont(adventProFont, 10) },
                record: { font: new PdfTrueTypeFont(adventProFont, 9) }
            }
        };
        grid.pdfExport(pdfExportProperties);
    }
}



