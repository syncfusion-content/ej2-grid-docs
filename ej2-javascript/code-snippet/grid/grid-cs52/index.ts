import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page} from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: employeeData,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    toolbar: ["ExcelExport"],
    allowExcelExport: true,
    toolbarClick: toolbarClick,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'LastName', headerText: 'Last Name', width: 100 },
        { field: 'City', headerText: 'City', width: 100 }
    ],
    height: 270,
});
grid.appendTo('#Grid');

let dropdownData = [
    { text: 'CurrentPage', value: 'CurrentPage' },
    { text: 'AllPages', value: 'AllPages' }
];

let dropDown: DropDownList = new DropDownList({
    index: 0,
    width: 150,
    dataSource: dropdownData,
});
dropDown.appendTo('#dropdown');
function toolbarClick(args: ClickEventArgs) {
    if (args['item'].id === 'Grid_excelexport') {
        // 'Grid_excelexport' -> Grid control id + _ + toolbar item name
        let exportProperties: ExcelExportProperties = {
            exportType: dropDown.value,
        };
        grid.excelExport(exportProperties);
    }
}
