import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Switch } from '@syncfusion/ej2-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, ExcelExport, Page)

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
   
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 130 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
    ],
    height: 272
});

let switchObj: Switch = new Switch();
switchObj.appendTo('#switch');

grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_excelexport') {
         // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
        let excelExportProperties: ExcelExportProperties = {
            includeHiddenColumn: switchObj.checked,
        };
        grid.excelExport(excelExportProperties);
    }
}
grid.appendTo('#Grid');