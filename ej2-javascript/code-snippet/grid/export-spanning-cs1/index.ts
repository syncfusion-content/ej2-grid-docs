import { Grid, Toolbar, ExcelExport, ClickEventArgs,ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data, columnDataType } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    toolbarClick: toolbarClick,
    excelQueryCellInfo: excelQueryCellInfo,
    queryCellInfo: queryCellInfo,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100},
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 100 }
    ],
    height: 272,
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs){
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport();
    }
}

function queryCellInfo(args: QueryCellInfoEventArgs) {
    let data = (args.data as columnDataType).OrderID;
    switch (data) {
        case 10248:
            if ((args.column).field === 'CustomerID') {
                args.rowSpan = 2;
            }
            break;
        case 10250:
            if ((args.column).field === 'CustomerID') {
                args.colSpan = 2;
            }
            break;
        case 10252:
            if ((args.column).field === 'OrderID') {
                args.rowSpan = 3;
            }
            break;
        case 10256:
            if ((args.column).field === 'CustomerID') {
                args.colSpan = 3;
            }
            break;
        case 10261:
            if ((args.column).field === 'Freight') {
                args.colSpan = 2;
            }
            break;
    }
}

function excelQueryCellInfo(args:ExcelQueryCellInfoEventArgs)
{
    let data = (args.data as columnDataType).OrderID;
        switch (data) {
            case 10248:
                if ((args.column).field === 'CustomerID') {
                    (args.cell ).rowSpan = 2;
                }
                break;
            case 10250:
                if ((args.column).field === 'CustomerID') {
                    args.colSpan = 2;
                }
                break;
            case 10252:
                if ((args.column).field === 'OrderID') {
                    (args.cell ).rowSpan = 3;
                }
                break;
            case 10256:
                if ((args.column).field === 'CustomerID') {
                    args.colSpan = 3;
                }
                break;
            case 10261:
                if ((args.column).field === 'Freight') {
                    args.colSpan = 2;
                }
                break;
        }
}
