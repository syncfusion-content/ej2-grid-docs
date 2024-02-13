import { Grid, Toolbar, ExcelExport, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', visible: false ,width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 150 }
    ],
    height: 230
});
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.columns[1].visible = true;
        grid.columns[3].visible = false;
        grid.excelExport();
    }
}
grid.excelExportComplete = () => {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
    }
grid.appendTo('#Grid');