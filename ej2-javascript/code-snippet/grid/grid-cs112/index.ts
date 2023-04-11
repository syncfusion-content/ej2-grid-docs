

import { Grid, ForeignKey, Edit, Toolbar, Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { employeeData } from './employeeData.ts'

Grid.Inject(ForeignKey, Edit, Toolbar, Page);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            { field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName',dataSource: employeeData, editType:'dropdownedit', edit: { params: { itemTemplate:'<div><img class="empImage" src="https://ej2.syncfusion.com/demos/src/grid/images/${EmployeeID}.png" alt="employee"/>' + '<div class="ename"> ${FirstName} </div></div>', }, },
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 315
    });
grid.appendTo('#Grid');



