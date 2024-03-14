

import { Grid, Page, Toolbar, ExcelExport, Group } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, ExcelExport, Group);
let grid: Grid = new Grid({
        dataSource: data,
        allowExcelExport: true,
        allowPaging: true,
        allowGrouping: true,
        toolbar: ['ExcelExport'],
        groupSettings: { columns: ['CustomerID', 'ShipCity'] },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    });
grid.appendTo('#Grid');
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
        grid.excelExport();
    }
}