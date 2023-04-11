

import { Grid, Page, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { employeeDetails } from './datasource.ts';
import { Query } from '@syncfusion/ej2-data';

Grid.Inject(Page, Edit, Toolbar);

let jobRole: { [key: string]: Object }[] = [
    { role: 'TeamLead', destId: '0' },
    { role: 'Manager', destId: '1' },
    { role: 'Engineer', destId: '2' },
    { role: 'Sales', destId: '3' },
    { role: 'Support', destId: '4' },
];

let salaryDetails: { [key: string]: Object }[] = [
    { salary: '11000', destId: '1' },
    { salary: '13500', destId: '2' },
    { salary: '16500', destId: '2' },
    { salary: '18500', destId: '1' },
    { salary: '21500', destId: '2' },
    { salary: '23000', destId: '2' },
];

let grid: Grid = new Grid({
    dataSource: employeeDetails,
    allowPaging: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    load: () => {
        var column = grid.getColumnByField('Salary');
        column.validationRules = {
            required: [customFn, window['Please enter valid salary']],
        };
    },
    columns: [
        {
            field: 'EmployeeID',
            headerText: 'Employee ID',
            isPrimaryKey: true,
            textAlign: 'Right',
            width: 120
        },
        {
            field: 'Role',
            headerText: 'Role',
            width: 120,
            editType: 'dropdownedit',
            edit: {
                params: {
                    query: new Query(),
                    dataSource: jobRole,
                    fields: { value: 'role', text: 'role' },
                    allowFiltering: true,
                    change: valChange
                }
           }
        },
        {
            field: 'Salary',
            headerText: 'Salary',
            width: 160,
            editType: 'dropdownedit',
            edit: {
                params: {
                    query: new Query(),
                    dataSource: salaryDetails,
                    fields: { value: 'salary', text: 'salary' },
                    allowFiltering: true
                }
            }
        },
        {
            field: 'Address',
            headerText: 'Address',
            width: 160
        }
    ]
});
grid.appendTo('#Grid');

(window as any).role = '';

function customFn(args) {
    switch (window['role']) {
        case 'Engineer':
            if (args.value > 10000 && args.value < 15000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary';
            }
        break;

        case 'TeamLead':
            if (args.value > 15000 && args.value < 20000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary';
            }
        break;

        case 'Manager':
            if (args.value > 20000 && args.value < 25000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
            }
        break;

        case 'Sales':
            if (args.value > 5000 && args.value < 25000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
            }
        break;

        case 'Support':
            if (args.value > 10000 && args.value < 19000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
            }
        break;
    }
    return false;
}

function valChange(args) {
    window['role'] = args.value;
}



