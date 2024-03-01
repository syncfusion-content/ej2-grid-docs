import { Grid, Page, Toolbar, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { image } from './image.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 110 },
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 120 }
    ],
    height: 220
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        let pdfExportProperties: PdfExportProperties = {
            header: {
                fromTop: 0,
                height: 130,
                contents: [
                  {
                    type: 'Line',
                    style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                    points: { x1: 0, y1: 4, x2: 685, y2: 4 },
                  },
                  {
                    type: 'Text',
                    value: 'Exported Document Of Customers',
                    position: { x:200, y: 50 },
                    style: { textBrushColor: '#000000', fontSize: 20 },
                  },
                  {
                    type: 'Image',
                    src: image,
                    position: { x: 40, y: 10 },
                    size: { height: 100, width: 150 },
                  },
                ],
            },
            footer: {
                fromBottom: 10,
                height: 60,
                contents: [
                  {
                    type: 'PageNumber',
                    pageNumberType: 'Arabic',
                    format: 'Page {$current} of {$total}', //optional
                    position: { x: 0, y: 25 },
                    style: {
                      textBrushColor: '#4169e1',
                      fontSize: 15,
                      hAlign: 'Center',
                    },
                  },
                  {
                    type: 'Line',
                    style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
                    points: { x1: 0, y1: 4, x2: 685, y2: 4 },
                  },
                ],
            }
        };
        grid.pdfExport(pdfExportProperties);
    }
}