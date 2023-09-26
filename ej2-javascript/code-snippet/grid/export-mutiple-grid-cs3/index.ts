


import { Grid, Page, Toolbar, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let firstGrid: Grid = new Grid({
    dataSource: data.slice(0, 5),
    allowPaging: true,
    allowPdfExport: true,
    exportGrids: ['FirstGrid', 'SecondGrid'],
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
    ],
});
firstGrid.appendTo('#FirstGrid');
let secondGrid: Grid = new Grid({
    dataSource: employeeData.slice(0, 5),
    allowPaging: true,
    allowPdfExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'FirstName', width: 140, headerText: 'First Name', type: 'string' },
        { field: 'LastName', width: 140, headerText: 'Last Name', type: 'string' },
        { field: 'City', headerText: 'City', width: 120 },
    ],
});
secondGrid.appendTo('#SecondGrid');
firstGrid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'FirstGrid_pdfexport') {
        let appendPdfExportProperties: PdfExportProperties = {
            multipleExport: { type: 'NewPage' }
        };
        firstGrid.pdfExport(appendPdfExportProperties, true);
    }
}