import { Grid, Page, Toolbar, ExcelExport } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, ExcelExport);
let grid: Grid = new Grid({
        dataSource: data,
        allowExcelExport: true,
        allowPaging: true,
        toolbar: ['ExcelExport'],
        selectionSettings: { type: 'Multiple', enableSimpleMultiRowSelection: true},
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        ],
    });
grid.appendTo('#Grid');
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_excelexport') {
       let selectedRecords = grid.getSelectedRecords();
       let exportProperties = {
            dataSource: selectedRecords
        };
       grid.excelExport(exportProperties);
        }
      }