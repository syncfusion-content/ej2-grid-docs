ej.grids.Grid.Inject(ej.grids.Group, ej.grids.Toolbar, ej.grids.PdfExport);
var grid = new ej.grids.Grid({
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
    height: 315
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
      grid.pdfExport();
    }
}
  
function exportGroupCaption(args) {
    args.captionText = args.data.field + ' - ' + args.data.key;
}

