

import { Grid, DetailRow, Toolbar, ExcelExport, ExcelExportProperties } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(DetailRow, Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: employeeData,
    toolbar: ['ExcelExport'],
    allowExcelExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    childGrid: {
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ]
    },
    beforeExcelExport: beforeExcelExport,
    toolbarClick: toolbarClick
});
grid.appendTo('#Grid');

function beforeExcelExport(args) {
    args.isChild = true;
}

function toolbarClick(args) {
    if (args['item'].id === 'Grid_excelexport') {
        let exportProperties: ExcelExportProperties = {
           hierarchyExportMode: "Expanded"
        };
        grid.excelExport(exportProperties);
    }
}



