

import { Grid, Page, Edit, Toolbar, ForeignKey } from '@syncfusion/ej2-grids';
import { orderDetails, customerData, employeeData } from './datasource.ts';

Grid.Inject(Page, Edit, Toolbar, ForeignKey);

let grid: Grid = new Grid(
    {
        dataSource: orderDetails,
        allowPaging: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 100 },
            {
                field: 'CustomerID', foreignKeyField: 'CustomerID', foreignKeyValue: 'ContactName', dataSource: customerData,
                width: 170, headerText: 'Customer Name', validationRules: { required: true }
            },
            { field: 'Freight', headerText: 'Freight', editType: 'numericedit', width: 130, textAlign: 'Right', format: 'C2' },
            {
                field: 'EmployeeID', foreignKeyField: 'EmployeeID', foreignKeyValue: 'City', dataSource: employeeData,
                width: 150, headerText: 'Ship City', validationRules: { required: true }
            },

            { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
        ],
        height: 315
    });
grid.appendTo('#Grid');



