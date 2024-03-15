import { Grid, Toolbar, ExcelExport, ExcelExportProperties  } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);
let grid: Grid = new Grid({
        dataSource: data,
        toolbar: ['ExcelExport'],
        allowExcelExport: true,
        toolbarClick: toolbarClick,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
            { field: 'ShipCity', headerText: 'Ship City', width: 120 },
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 270
    });
    grid.appendTo('#Grid');
    
    function toolbarClick(args: ClickEventArgs ) {
        if (args.item.id === 'Grid_excelexport') {
            // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
            let excelExportColumns = [
                { field: 'OrderID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', headerText: 'Customer Name', width: 120 },
                { field: 'Freight', textAlign: 'Center', width: 120 }
            ];
            let excelExportProperties: ExcelExportProperties  = {
                columns: excelExportColumns
            };
            grid.excelExport(excelExportProperties);
        }
    }