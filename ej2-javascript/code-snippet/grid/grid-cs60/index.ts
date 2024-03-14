import { Grid, Toolbar, ExcelExport, ClickEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'ProductName', headerText: 'Product Name', width: 100 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 80 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 120 }
    ],
    height: 272
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.showSpinner();
        grid.excelExport();
    }
}
grid.excelExportComplete = () => {
    grid.hideSpinner();
}