import { Grid, Toolbar, ExcelExport, QueryCellInfoEventArgs, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ],
    height: 230
});
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args['item'].id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
        grid.excelExport();
    }
}
grid.excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs) => {
        if(args.column.field == 'Freight'){
            if(args.value < 30) {
                args.style = {backColor: '#99ffcc'};
            }
            else if(args.value < 60) {
                args.style = {backColor: '#ffffb3'};
            }
            else {
                args.style = {backColor: '#ff704d'};
            }
        }
    }
grid.queryCellInfo = (args:QueryCellInfoEventArgs) => {
        if(args.column.field == 'Freight'){
            if(args.data['Freight'] < 30) {
                args.cell.bgColor = '#99ffcc';
            }
            else if(args.data['Freight'] < 60) {
                args.cell.bgColor = '#ffffb3';
            }
            else {
                args.cell.bgColor = '#ff704d';
            }
        }
    }
grid.appendTo('#Grid');