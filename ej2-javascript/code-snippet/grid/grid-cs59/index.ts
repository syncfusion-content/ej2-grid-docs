import { Grid, Toolbar, ExcelExport, ClickEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport', 'CsvExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 272
});
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
        grid.excelExport();
    }
    else if (args['item'].id === 'Grid_csvexport') {
         // 'Grid_csvexport' -> Grid control id + _ + toolbar item name
        grid.csvExport();
    }
}
grid.appendTo('#Grid');