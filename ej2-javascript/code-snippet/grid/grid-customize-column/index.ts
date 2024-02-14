import { Grid, Toolbar, PdfExport } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
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
        let pdfExportColumns = [
            { field: 'OrderID', textAlign: 'Right', width: '90' },
            { field: 'CustomerID', headerText: 'Customer Name', width: '100' },
            { field: 'Freight', textAlign: 'Center', width: '80' },
        ];

        let pdfExportProperties = {
            columns: pdfExportColumns
        };
        grid.pdfExport(pdfExportProperties);
    }
}