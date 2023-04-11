


import { Grid, Toolbar, ExcelExport, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'ShipCity', headerText: 'ShipCity', width: 140, textAlign: 'Right' }
    ],
    height: 230
});
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
        grid.excelExport();
    }
}
grid.pdfExportComplete = () => {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
    }
grid.appendTo('#Grid');



