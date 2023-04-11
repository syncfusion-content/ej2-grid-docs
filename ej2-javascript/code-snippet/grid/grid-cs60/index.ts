


import { Grid, Page, Toolbar, PdfExport, ExcelExport } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowExcelExport: true,
    toolbar: ['PdfExport', 'ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'ShipCity', headerText: 'ShipCity', textAlign: 'Right', width: 140 }
    ],
    height: 230
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.showSpinner();
        grid.pdfExport();
    }
    if (args['item'].id === 'Grid_excelexport') {
        grid.showSpinner();
        grid.excelExport();
    }
}
grid.pdfExportComplete = () => {
        grid.hideSpinner();
    }
grid.excelExportComplete = () => {
        grid.hideSpinner();
    }



