import { Grid, Toolbar, PdfExport, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { employeeData } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: employeeData,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
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
    pdfQueryCellInfo: pdfQueryCellInfo,
    height: 315
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs): any {
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
