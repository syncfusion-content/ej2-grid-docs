import { Grid, DetailRow, Toolbar, ExcelExport } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';
import { DropDownList, ClickEventArgs } from '@syncfusion/ej2-dropdowns';

Grid.Inject(DetailRow, Toolbar, ExcelExport);

let grid: Grid = new Grid({
    dataSource: employeeData,
    toolbar: ["ExcelExport"],
    allowExcelExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'City', headerText: 'City', width: 100 },
        { field: 'Country', headerText: 'Country', width: 100 }
    ],
    childGrid: {                
        dataSource: data,
        queryString: 'EmployeeID',
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'ShipCity', headerText: 'Ship City', width: 100 },
            { field: 'ShipName', headerText: 'Ship Name', width: 110 }
        ],
    },
    toolbarClick: toolbarClick
});
grid.appendTo('#Grid');

let dropdownData = [
    { text: 'None', value: 'None' },
    { text: 'Expanded', value: 'Expanded' },
    { text: 'All', value: 'All' },
  ];
  
let dropDown: DropDownList = new DropDownList({
    index: 0,
    width: 150,
    dataSource: dropdownData,
  });
dropDown.appendTo('#dropdown');
  
function toolbarClick(args: ClickEventArgs) {
    if (args['item'].id === 'Grid_excelexport') {
        let exportProperties = {
            hierarchyExportMode: dropDown.value,
        };
        grid.excelExport(exportProperties);
    }
}