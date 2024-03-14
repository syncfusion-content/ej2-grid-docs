import { Grid, Page, Toolbar, PdfExport, Group, PdfExportProperties } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data, base64AlgeriaFont } from './datasource.ts';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

Grid.Inject(Page, Toolbar, PdfExport, Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCity'] },
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        let pdfExportProperties: PdfExportProperties  = {
            theme: {
                header: {
                    font: new PdfTrueTypeFont(base64AlgeriaFont, 12),
                    fontColor: '#000080',
                    bold: true,
                    border: { color: '#5A5A5A', dashStyle: 'Solid' }
                },
                caption: {
                    font: new PdfTrueTypeFont(base64AlgeriaFont, 10),
                    fontColor: '#0B6623',
                    bold: true,
                },
                record: {
                    font: new PdfTrueTypeFont(base64AlgeriaFont, 9),
                    fontColor: '#B22222',
                    bold: true,
                }
            }
        };
        (grid as Grid).pdfExport(pdfExportProperties);
    }
}