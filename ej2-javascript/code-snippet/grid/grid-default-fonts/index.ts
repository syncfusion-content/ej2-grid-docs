import { Grid, Toolbar, PdfExport,Group } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport,Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    groupSettings: { columns: ['ShipCity'] },
    allowGrouping: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        let pdfExportProperties = {
            theme: {
                header: {
                    font: new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold),
                    fontColor: '#000080',
                    bold: true,
                    border: { color: '#5A5A5A', dashStyle: 'Solid' },
                },
                caption: {
                    font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9),
                    fontColor: '#0B6623',
                    bold: true,
                },
                record: {
                    font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10),
                    fontColor: '#B22222',
                    bold: true,
                },
            }
        };
        grid.pdfExport(pdfExportProperties);
    }
}