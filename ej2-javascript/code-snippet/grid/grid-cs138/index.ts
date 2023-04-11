

import { Grid, Toolbar, Page, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120},
        { field: 'CustomerID', width: 140, headerText: 'Customer ID'},
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'ShipName', headerText: 'ShipName', textAlign: 'Right', width: 140}
    ],
    height: 230,
});
grid.appendTo('#Grid');

grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

grid.pdfHeaderQueryCellInfo = (args: Object) => {
    args.cell.row.pdfGrid.repeatHeader = true;
}



