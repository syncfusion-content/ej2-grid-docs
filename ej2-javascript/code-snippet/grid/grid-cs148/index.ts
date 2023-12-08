import { Grid, Toolbar, PdfExport, ClickEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 150, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 150},
        { field: 'ShipName', headerText: 'Ship Name', textAlign: 'Right', width: 150 }
    ],
    height: 230
});
grid.appendTo('#Grid');

grid.toolbarClick = function (args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') { 
        grid.pdfExport();
    }
}