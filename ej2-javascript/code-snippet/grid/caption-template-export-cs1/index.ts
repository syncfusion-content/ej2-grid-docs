import { Grid, Group, Toolbar, PdfExport, ExportGroupCaptionEventArgs } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { employeeData } from './datasource.ts';

Grid.Inject(Group, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: employeeData,
    allowGrouping: true,
    groupSettings: { captionTemplate: '#captiontemplate', columns: ['EmployeeID'] },
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', width: 120 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'City', headerText: 'City' },
        { field: 'Title', headerText: 'Title', width: 170 }
    ],
    toolbarClick: toolbarClick,
    exportGroupCaption: exportGroupCaption,
    height: 273
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') {
      grid.pdfExport();
    }
}
  
function exportGroupCaption(args: ExportGroupCaptionEventArgs) {
    args.captionText = args.data['field'] + ' - ' + args.data['key'];
}
