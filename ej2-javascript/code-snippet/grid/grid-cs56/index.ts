import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Filter} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, ExcelExport, Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowExcelExport: true,
    allowFiltering: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 150 }
    ],
    height: 230
});
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
        let excelExportProperties: ExcelExportProperties = {
            enableFilter: true
        };
        grid.excelExport(excelExportProperties);

    }
}
grid.appendTo('#Grid');