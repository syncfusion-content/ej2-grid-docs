import { Grid, DetailRow, Toolbar } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

Grid.Inject(DetailRow, Toolbar);

let grid: Grid = new Grid({
    dataSource: employeeData,
    toolbar: ['Print'],
    hierarchyPrintMode: 'All',
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FirstName', headerText: 'First Name', width: 150 },
        { field: 'LastName', headerText: 'Last Name', width: 150 },
        { field: 'City', headerText: 'City', width: 150 }
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
    }
});
grid.appendTo('#Grid');

let dropdownList = ['All', 'Expanded', 'None'];
let dropdownObject: DropDownList = new DropDownList({
    width: "120",
    popupHeight:"220",
    dataSource: dropdownList,
    change: onModeChange,
});
dropdownObject.appendTo('#dropdown');
function onModeChange(args: ChangeEventArgs) {
    grid.hierarchyPrintMode = args.value;
}