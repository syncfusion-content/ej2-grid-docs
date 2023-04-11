


import { Grid, Page, Toolbar, PdfExport, ExcelExport } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Query } from '@syncfusion/ej2-data';

Grid.Inject(Page, Toolbar, PdfExport, ExcelExport);

let queryClone: Object;
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
        queryClone = grid.query;
        grid.query = new Query().addParams("recordcount", "12");
        grid.pdfExport();
    }
    if (args['item'].id === 'Grid_excelexport') {
        queryClone = grid.query;
        grid.query = new Query().addParams("recordcount", "12");
        grid.excelExport();
    }
}
grid.pdfExportComplete = () => {
        grid.query = queryClone;
    }
grid.excelExportComplete = () => {
        grid.query = queryClone;
    }



