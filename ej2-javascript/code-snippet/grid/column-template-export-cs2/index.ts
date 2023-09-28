import { Grid, Toolbar, ExcelExport, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { employeeData } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: employeeData,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        {
            headerText: 'Employee Image', textAlign: 'Center',
            template: '#imageTemplate', width: 150
        },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'EmailID', headerText: 'Email ID', template: '#mailTemplate', width: 170 }
    ],
    toolbarClick: toolbarClick,
    excelQueryCellInfo: excelQueryCellInfo,
    height: 273
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport();
    }
}

function excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): any {
    if (args.column.headerText === 'Employee Image') {
        args.image = {
            base64: args.data['EmployeeImage'],
            height: 50,
            width: 50,
        };
    }
    if (args.column.headerText === 'Email ID') {
        args.hyperLink = {
            target: 'mailto:' + args.data['EmailID'],
            displayText: args.data['EmailID'],
        };
    }
}
